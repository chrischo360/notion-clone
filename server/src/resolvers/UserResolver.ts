import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
  Int
} from "type-graphql";
import { hash, compare } from "bcryptjs";
import { User } from "../entity/User";
import { MyContext } from "../MyContext";
import { createRefreshToken, createAccessToken } from "../auth";
import { isAuth } from "../isAuth";
import { sendRefreshToken } from "../sendRefreshToken";
import { getConnection } from "typeorm";
import { verify } from "jsonwebtoken";
import { validateUserRegistration } from "../utils/validateUserRegistration";
import { UserResponse } from "./UserResponse";



// @ObjectType()
// class FieldError {
//   @Field()
//   field: string
//   @Field()
//   message: string
// }

// @ObjectType()
// class UserResponse {
//   @Field(() => [FieldError], { nullable: true })
//   errors?: FieldError[];

//   @Field({ nullable: true })
//   accessToken: string;

//   @Field(() => User, { nullable: true })
//   user: User;
// }

@Resolver(User)
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    console.log(payload);
    return `your user id is: ${payload!.userId}`;
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() context: MyContext) {
    const authorization = context.req.headers["authorization"];

    if (!authorization) {
      return null;
    }

    try {
      const token = authorization.split(" ")[1];
      const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      return User.findOne(payload.userId);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: MyContext) {
    sendRefreshToken(res, "");

    return true;
  }

  @Mutation(() => Boolean)
  async revokeRefreshTokensForUser(@Arg("userId", () => Int) userId: number) {
    await getConnection()
      .getRepository(User)
      .increment({ id: userId }, "tokenVersion", 1);

    return true;
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: MyContext
  ) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "that username doesn't exist",
          },
        ],
        // accessToken: "",
        // user: {
        //   null
        // }
      };
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password",
          },
        ],
      };
    }

    // login successful

    sendRefreshToken(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
      user
    };
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const errors = validateUserRegistration(email, password);
    if (errors) {
      return { errors };
    }

    const hashedPassword = await hash(password, 12);
    let user;
    try {
      user = await User.create({
        email,
        password: hashedPassword
      }).save()
    } catch (err) {
      console.log(err)
      if (err.code === "ER_DUP_ENTRY") {
        return {
          errors: [
            {
              field: "username",
              message: "username already taken",
            },
          ],
        };
    }
  }
  return {user};

}
}
