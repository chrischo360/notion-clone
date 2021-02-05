import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, Observable, createHttpLink  } from "@apollo/client";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { accessToken, getAccessToken, setAccessToken } from "../accessToken";
import jwtDecode from "jwt-decode";
import { from } from "apollo-link";
import { setContext } from "@apollo/client/link/context";

let apolloClient: any

console.log(accessToken)
  // const token = getAccessToken()
  // console.log("jsut token:", token)
  // console.log("getAccessToken:",getAccessToken())
  // console.log("TOKEN TOKEN TOKEN", accessToken)
 

  // return {
  //   headers: {
  //     ...headers,
  //     authorization: `bearer ${accessToken}`
  //   },
  // }
// })

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const accessToken = getAccessToken()
    console.log("ACCESS TOKEN IN APOLLOCLIENT:", accessToken)
    console.log("tokenRefreshLink1:" ,accessToken)

    if (!accessToken) {
      return true
    }

    try {
      console.log("DOES IT GET HERE?")
      const { exp } = jwtDecode(accessToken)

      if (Date.now() >= exp * 1000) {
        return false
      } else {
        return true
      }
    } catch (e) {
      console.log('Error here...')
      return false
    }
  },

  fetchAccessToken: () => {
    return fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    })
  },
  handleFetch: (accessToken) => {
    console.log("handleFetchToken:", accessToken)
    setAccessToken(accessToken)
  },
  handleError: (err) => {
    console.warn('Your refresh token is invalid. Try to relogin')
    console.log(err)
  },
})

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any;
      Promise.resolve(operation)
        .then(operation => {
          const accessToken = getAccessToken();
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

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
})
console.log("httpLink")
const authLink = setContext((request, previousContext) => ({
  headers: {
      authorization: "bearer " + accessToken 
  }
}));

function createApolloClient() {
  return new ApolloClient({
        ssrMode: false,
        link: ApolloLink.from([tokenRefreshLink, requestLink, httpLink]),
        cache: new InMemoryCache()
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