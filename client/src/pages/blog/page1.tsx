import { useMutation, useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/core";
import gql from "graphql-tag";
import React from "react";
import { onError } from "@apollo/client/link/error";
import LoadingMessage from "../../components/LoadingMessage";
import Page from "../../components/Page";

const PAGE = gql`
  query NinthPage($id: Int!) {
    page(id: $id) {
      id
      title
      content
      cover
      emoji
    }
  }
`;

const Page1 = () => {
  const { loading, error, data } = useQuery(PAGE, {
    variables: { id: 9 },
    errorPolicy: "all",
  });

  if (loading) return <LoadingMessage />;
  if (error)
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

  const { page } = data;

  return (
    <Box>
      <Page
        cover={page.cover}
        title={page.title}
        content={page.content}
        emoji={page.emoji}
        id={page.id}
      />
    </Box>
  );
};

export default Page1;
