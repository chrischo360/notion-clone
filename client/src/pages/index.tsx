import React, { useState } from "react";
import { initializeApollo } from "../lib/apolloClient";
import { gql } from "@apollo/client";
import App from "../components/App";
import PageList from "../components/PageList";

export const NOTES = gql`
  query AllNotes {
    notes {
      id
      content
      createdAt
      updatedAt
    }
  }
`;

const IndexPage: React.FC = () => {
  return (
    <App>
      <PageList />
    </App>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: NOTES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
