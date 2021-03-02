import App from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "../lib/apollo";
import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { Global, css } from "@emotion/react";

const GlobalStyles = css`
    /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
    .js-focus-visible :focus:not([data-focus-visible-added]) {
        outline: none;
        box-shadow: none;
    }
`;

class MyApp extends App<any> {
    render() {
        const { Component, pageProps, apolloClient } = this.props;
        return (
            <ApolloProvider client={apolloClient}>
                <ChakraProvider>
                    <Global styles={GlobalStyles} />

                    <Component {...pageProps} />
                </ChakraProvider>
            </ApolloProvider>
        );
    }
}

export default withApollo(MyApp);
