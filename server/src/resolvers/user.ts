import { User } from "../entities/User";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import * as argon2 from "argon2";
import { Length, IsEmail } from "class-validator";
import { IsEmailAlreadyExist } from "../utils/isEmailAlreadyExist";
import { MyContext } from "../types";
import { isAuthorized } from "../utils/isAuthorized";
import { sendEmail } from "../utils/sendEmail";
import { createConfirmationUrl } from "../utils/createConfirmationUrl";
import { redis } from "../redis";
import { confirmationUrlPrefix, forgotPasswordPrefix } from "../redisPrefixes";
import { v4 } from "uuid";

@InputType()
class RegisterInput {
  @Length(4, 255)
  @Field()
  username: string;

  @Field()
  password: string;

  @IsEmail()
  @Field()
  @IsEmailAlreadyExist({ message: "email already being used" })
  email: string;
}

@InputType()
class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
class ChangePasswordInput {
  @Field()
  token: string;

  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @UseMiddleware(isAuthorized)
  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Mutation(() => User)
  async register(
    @Arg("input") { username, email, password }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await argon2.hash(password);

    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    }).save();

    const confirmationUrl = await createConfirmationUrl(user.id);

    await sendEmail(email, confirmationUrl);

    return user;
  }

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("input") { username, password }: LoginInput,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return null;
    }

    const valid = await argon2.verify(user.password, password);

    if (!valid) {
      return null;
    }

    if (!user.confirmed) {
      return null;
    }

    ctx.req.session!.userId = user.id;

    return user;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
    if (!ctx.req.session!.userId) {
      return undefined;
    }

    return User.findOne(ctx.req.session!.userId);
  }

  @Mutation(() => Boolean, { nullable: true })
  async confirmUser(@Arg("token") token: string): Promise<Boolean> {
    const userId = await redis.get(confirmationUrlPrefix + token);

    if (!userId) {
      return false;
    }

    await User.update({ id: parseInt(userId, 10) }, { confirmed: true });
    redis.del(token);

    return true;
  }

  @Mutation(() => Boolean)
  async forgotPassword(@Arg("email") email: string): Promise<Boolean> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return true;
    }

    const token = v4();
    await redis.set(forgotPasswordPrefix + token, user.id, "ex", 60 * 60 * 24); // 1 day expiration

    await sendEmail(
      email,
      `http://localhost:3000/user/change-password/${token}`
    );

    return true;
  }

  @Mutation(() => User, { nullable: true })
  async updatePassword(
    @Arg("input") { token, password }: ChangePasswordInput,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    const userId = await redis.get(forgotPasswordPrefix + token);

    if (!userId) {
      return null;
    }

    const user = await User.findOne(userId);

    if (!user) {
      return null;
    }

    await redis.del(forgotPasswordPrefix + token);

    user.password = await argon2.hash(password);

    await user.save();

    ctx.req.session!.userId = user.id;
    return user;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: MyContext): Promise<Boolean> {
    return new Promise((res, rej) =>
      ctx.req.session!.destroy((err) => {
        if (err) {
          console.log(err);
          rej(false);
        }
        ctx.res.clearCookie("qid");
        return res(true);
      })
    );
  }
}

// @ObjectType()
// class FieldError {
//   @Field()
//   field: string;
//   @Field()
//   message: string;
// }

// @InputType({ description: "Username and Password Input" })
// class UsernamePasswordInput implements Partial<User> {
//   @Field()
//   username!: string;

//   @Field()
//   password!: string;
// }

// @ObjectType()
// class UserResponse {
//   @Field(() => [FieldError], { nullable: true })
//   errors?: FieldError[];

//   @Field(() => User, { nullable: true })
//   user?: User;
// }

// @Mutation()
// login()

// @Mutation()
// logout()

// @Mutation()
// updatePassword()

// @FieldResolver()
// email()

// @Mutation()
// me()
