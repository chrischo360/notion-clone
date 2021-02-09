import App from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "../src/lib/apollo";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";



class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);











// import { ThemeProvider, CSSReset, ChakraProvider } from "@chakra-ui/react";
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "../src/lib/apolloClient";
// import Head from "next/head";
// import theme from "../src/theme";
// import type { AppProps } from 'next/app';
// import React, { useState, useEffect } from "react";
// import { setAccessToken } from "../src/lib/accessToken";


// // import theme from "../theme";

// function MyApp({ Component, pageProps }: AppProps) {

//     // const apolloClient = useApollo(pageProps.initialApolloState);


//     // useEffect(() => {
//     //   console.log("USE EFFECT")
//     //     fetch("http://localhost:4000/refresh_token", {
//     //       method: "POST",
//     //       credentials: "include"
//     //     }).then(async x => {
//     //       const { accessToken } = await x.json();
//     //       setAccessToken(accessToken);
//     //       console.log("ACCESS TOKEN:", accessToken)
//     //       setLoading(false);
//     //     });
//     //   }, []);

//     return (
//         <ApolloProvider client={apolloClient}>
//             <ChakraProvider theme={theme}>
//                 <Head>
//                     <link rel="shortcut icon" href="/public/favicon.ico" />
//                 </Head>
//                 <CSSReset />
//                 <Component {...pageProps} />
//             </ChakraProvider>
//         </ApolloProvider>
//     );
// }

// export default MyApp;
