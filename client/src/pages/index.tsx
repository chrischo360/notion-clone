import React from "react";
import { initializeApollo } from "../lib/apolloClient";
import PagesList from "../components/allPages";
import { gql } from "@apollo/client";
import MyEditor from "../components/editor/editor";

const IndexPage: React.FC = () => {
  return (
    <div>
      <MyEditor />
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  // await apolloClient.query({
  //   query: GET_PAGE_QUERY,
  // });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
