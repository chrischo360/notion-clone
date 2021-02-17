import { Box, Input, Button, Heading, Divider, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { useCreatePageMutation, useGetMeQuery } from "../generated/graphql";

interface createpageformProps {}

export const CreatePageForm: React.FC<createpageformProps> = ({}) => {
  const [createPage] = useCreatePageMutation();
  const { data } = useGetMeQuery();

  return (
    <Formik
      initialValues={{
        title: "",
        cover: "",
        emoji: "",
      }}
      validate={() => {}}
      onSubmit={async ({ title, cover, emoji }) => {
        console.log("Title:", title, "Cover:", cover, "Emoji", emoji);
        const userId = data?.me?.id;
        const response = await createPage({
          variables: {
            title,
            cover,
            emoji,
            userId,
          },
        });
        console.log("Response:", response);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            minWidth="1vw"
          >
            <Text>Create Page</Text>
            <Box display="flex" flexDirection="column">
              <Input
                colorScheme="gray"
                placeholder="Enter Your Title"
                size="sm"
                variant="outline"
                type="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <Input
                colorScheme="gray"
                placeholder="Enter your emoji"
                size="sm"
                variant="outline"
                type="emoji"
                name="emoji"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emoji}
              />
              <Input
                colorScheme="gray"
                placeholder="Enter your cover"
                size="sm"
                variant="outline"
                type="cover"
                name="cover"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cover}
              />
              <Button type="submit" isLoading={isSubmitting}>
                Submit
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
