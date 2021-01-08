import { ThemeProvider, CSSReset, ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../src/lib/apolloClient";
import Head from "next/head";
import theme from "../src/theme";

// import theme from "../theme";

function MyApp({ Component, pageProps }: any) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <ChakraProvider theme={theme}>
                <Head>
                    <link rel="shortcut icon" href="/public/favicon.ico" />
                </Head>
                <CSSReset />
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    );
}

export default MyApp;
