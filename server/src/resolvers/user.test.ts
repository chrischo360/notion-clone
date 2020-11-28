import { testConn } from "../test-utils/testConn";
import { Connection } from "typeorm";
import { gCall } from "../test-utils/gCall";

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const registerMutation = `
    mutation Register($input: RegisterInput!) {
        register(
            input: $input
        ) {
            id
            username
            email
        }
    }
`;

describe("Register", () => {
  it("create a user", async () => {
    console.log(
      await gCall({
        source: registerMutation,
        variableValues: {
          input: {
            username: "bobbysenior",
            email: "bobbysenior@gmail.com",
            password: "gspa1234",
          },
        },
      })
    );
  });
});
