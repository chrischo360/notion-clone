import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { string } from "prop-types";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { useConfirmUserMutation } from "../../../src/generated/graphql";

interface confirmationPageProps {}

const ConfirmationPage: React.FC<confirmationPageProps> = () => {
  const router = useRouter();
  const [confirmUser] = useConfirmUserMutation();
  const { confirmationId }: ParsedUrlQuery = router.query;
  console.log(confirmationId);
  console.log("type", typeof confirmationId);
  const handleSubmit = () => {
    confirmUser(confirmationId);
    console.log("success");
  };
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Thank you for signing up for 🅱️otion!</Heading>
        <Button type="submit" onSubmit={handleSubmit}>
          Confirm User
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmationPage;
