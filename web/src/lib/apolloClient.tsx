import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, Observable  } from "@apollo/client";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { concatPagination } from "@apollo/client/utilities";
import { onError } from "apollo-link-error";
import { getAccessToken, setAccessToken } from "../accessToken";
import jwtDecode from "jwt-decode";

let apolloClient: any;

const cache = new InMemoryCache({});

const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable(observer => {
        let handle: any;
        Promise.resolve(operation)
          .then(operation => {
            const accessToken = getAccessToken();
            // console.log("GOT TO SETTING AUTHORIZATION")
            if (accessToken) {
              operation.setContext({
                headers: {
                  authorization: `bearer ${accessToken}`
                }
              });
            }
          })
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer)
            });
          })
          .catch(observer.error.bind(observer));
  
        return () => {
          if (handle) handle.unsubscribe();
        };
      })
  );

// const tokenLink = ApolloLink.from([
//     new TokenRefreshLink({
//       accessTokenField: "accessToken",
//       isTokenValidOrUndefined: () => {
//         const token = getAccessToken();

//         if (!token) {
//           return true;
//         }

//         try {
//           const { exp } = jwtDecode(token);
//           if (Date.now() >= exp * 1000) {
//             return false;
//           } else {
//             return true;
//           }
//         } catch {
//           return false;
//         }
//       },
//       fetchAccessToken: () => {
//         return fetch("http://localhost:4000/refresh_token", {
//           method: "POST",
//           credentials: "include"
//         });
//       },
//       handleFetch: accessToken => {
//         setAccessToken(accessToken);
//       },
//       handleError: err => {
//         console.warn("Your refresh token is invalid. Try to relogin");
//         console.error(err);
//       }
//     }),

//     onError(({ graphQLErrors, networkError }) => {
//       console.log(graphQLErrors);
//       console.log(networkError);
//     }),
//     requestLink,
//     new HttpLink({
//       uri: "http://localhost:4000/graphql",
//       credentials: "include"
//     })
//   ])


function createApolloClient() {
    return new ApolloClient({
        link: ApolloLink.from([
            new TokenRefreshLink({
              accessTokenField: "accessToken",
              isTokenValidOrUndefined: () => {
                const token = getAccessToken();
        
                if (!token) {
                  return true;
                }
        
                try {
                  const { exp } = jwtDecode(token);
                  if (Date.now() >= exp * 1000) {
                    return false;
                  } else {
                    return true;
                  }
                } catch {
                  return false;
                }
              },
              fetchAccessToken: () => {
                return fetch("http://localhost:4000/refresh_token", {
                  method: "POST",
                  credentials: "include"
                });
              },
              handleFetch: accessToken => {
                setAccessToken(accessToken);
              },
              handleError: err => {
                console.warn("Your refresh token is invalid. Try to relogin");
                console.error(err);
              }
            }),        
            // onError(({ graphQLErrors, networkError }) => {
            //   console.log(graphQLErrors);
            //   console.log(networkError);
            // }),
            requestLink,
            new HttpLink({
              uri: "http://localhost:4000/graphql",
              credentials: "include"
            })
          ]),
        cache
      });
}
    //     }),
    // ])

    // link: new HttpLink({
    //   uri: "http://localhost:4000/graphql", // Server URL (must be absolute)
    //   credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    // }),


//     cache: new InMemoryCache({
//       typePolicies: {
//         Query: {
//           fields: {
//             allPosts: concatPagination(),
//           },
//         },
//       },
//     }),
//   });
// }

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}