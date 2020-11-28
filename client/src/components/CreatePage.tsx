import { gql, useMutation } from "@apollo/client";
import { Box, Heading } from "@chakra-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

const ADDPAGE = gql`
  mutation AddPage(
    $content: String!
    $cover: String!
    $title: String!
    $emoji: String!
  ) {
    createPage(
      options: {
        content: $content
        cover: $cover
        title: $title
        emoji: $emoji
      }
    ) {
      content
      cover
      title
      emoji
    }
  }
`;

const CreatePage = () => {
  const [createPage] = useMutation(ADDPAGE);

  return (
    <Box>
      <Heading>Form For Creating a Page</Heading>
      <Formik
        initialValues={{ content: "", cover: "", title: "", emoji: "" }}
        onSubmit={(values) => {
          createPage({
            variables: {
              content: values.content,
              cover: values.cover,
              title: values.title,
              emoji: values.emoji,
            },
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="content" name="content" />
            <ErrorMessage name="content" component="div" />
            <Field type="cover" name="cover" />
            <ErrorMessage name="cover" component="div" />
            <Field type="title" name="title" />
            <ErrorMessage name="title" component="div" />
            <Field type="emoji" name="emoji" />
            <ErrorMessage name="emoji" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreatePage;
