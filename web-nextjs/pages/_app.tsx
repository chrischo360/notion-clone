import App from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "../lib/apollo";
import { ChakraProvider } from "@chakra-ui/react";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <ChakraProvider>
        <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
