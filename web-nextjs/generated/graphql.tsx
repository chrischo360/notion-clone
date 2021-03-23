import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  bye: Scalars['String'];
  users: Array<User>;
  me?: Maybe<User>;
  blocks: Array<Block>;
  block: Block;
  page: Page;
  pages: Array<Page>;
};


export type QueryBlockArgs = {
  blockId: Scalars['Float'];
};


export type QueryPageArgs = {
  pageUrl: Scalars['String'];
};


export type QueryPagesArgs = {
  userId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  password: Scalars['String'];
  tokenVersion: Scalars['Float'];
  avatarUrl: Scalars['String'];
};

export type Block = {
  __typename?: 'Block';
  id: Scalars['Int'];
  type: Scalars['String'];
  content: Scalars['String'];
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  cover: Scalars['String'];
  title: Scalars['String'];
  emoji: Scalars['String'];
  pageUrl: Scalars['String'];
  user: User;
};


export type Mutation = {
  __typename?: 'Mutation';
  logout: Scalars['Boolean'];
  revokeRefreshTokensForUser: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
  createBlock: Block;
  updateBlock: Scalars['Boolean'];
  createPage: Page;
  updatePage: Scalars['Boolean'];
  updatePageTitle: Scalars['Boolean'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateBlockArgs = {
  input: BlockInput;
};


export type MutationUpdateBlockArgs = {
  content: Scalars['String'];
  type: Scalars['String'];
  blockId: Scalars['Int'];
};


export type MutationCreatePageArgs = {
  input: PageInput;
};


export type MutationUpdatePageArgs = {
  input: PageInputUpdate;
  pageId: Scalars['Float'];
};


export type MutationUpdatePageTitleArgs = {
  title: Scalars['String'];
  pageId: Scalars['Float'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type BlockInput = {
  type: Scalars['String'];
  content: Scalars['String'];
};

export type PageInput = {
  cover: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  userId: Scalars['Float'];
};

export type PageInputUpdate = {
  cover?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
};

export type CreateBlockMutationVariables = Exact<{
  content: Scalars['String'];
  type: Scalars['String'];
}>;


export type CreateBlockMutation = (
  { __typename?: 'Mutation' }
  & { createBlock: (
    { __typename?: 'Block' }
    & Pick<Block, 'id' | 'content' | 'type'>
  ) }
);

export type CreatePageMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  cover: Scalars['String'];
  userId: Scalars['Float'];
}>;


export type CreatePageMutation = (
  { __typename?: 'Mutation' }
  & { createPage: (
    { __typename?: 'Page' }
    & Pick<Page, 'cover' | 'title' | 'emoji' | 'pageUrl'>
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'accessToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'accessToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type RevokeRefreshTokensMutationVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type RevokeRefreshTokensMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'revokeRefreshTokensForUser'>
);

export type UpdateBlockMutationVariables = Exact<{
  content: Scalars['String'];
  type: Scalars['String'];
  blockId: Scalars['Int'];
}>;


export type UpdateBlockMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateBlock'>
);

export type UpdatePageMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  pageId: Scalars['Float'];
}>;


export type UpdatePageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updatePage'>
);

export type UpdatePageTitleMutationVariables = Exact<{
  title: Scalars['String'];
  pageId: Scalars['Float'];
}>;


export type UpdatePageTitleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updatePageTitle'>
);

export type ByeQueryVariables = Exact<{ [key: string]: never; }>;


export type ByeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'bye'>
);

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type GetPageQueryVariables = Exact<{
  pageUrl: Scalars['String'];
}>;


export type GetPageQuery = (
  { __typename?: 'Query' }
  & { page: (
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'cover' | 'title' | 'emoji' | 'pageUrl'>
  ) }
);

export type GetPagesQueryVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type GetPagesQuery = (
  { __typename?: 'Query' }
  & { pages: Array<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'createdAt' | 'updatedAt' | 'cover' | 'title' | 'emoji' | 'pageUrl'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'password' | 'tokenVersion'>
  )> }
);


export const CreateBlockDocument = gql`
    mutation createBlock($content: String!, $type: String!) {
  createBlock(input: {content: $content, type: $type}) {
    id
    content
    type
  }
}
    `;
export type CreateBlockMutationFn = Apollo.MutationFunction<CreateBlockMutation, CreateBlockMutationVariables>;

/**
 * __useCreateBlockMutation__
 *
 * To run a mutation, you first call `useCreateBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlockMutation, { data, loading, error }] = useCreateBlockMutation({
 *   variables: {
 *      content: // value for 'content'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateBlockMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlockMutation, CreateBlockMutationVariables>) {
        return Apollo.useMutation<CreateBlockMutation, CreateBlockMutationVariables>(CreateBlockDocument, baseOptions);
      }
export type CreateBlockMutationHookResult = ReturnType<typeof useCreateBlockMutation>;
export type CreateBlockMutationResult = Apollo.MutationResult<CreateBlockMutation>;
export type CreateBlockMutationOptions = Apollo.BaseMutationOptions<CreateBlockMutation, CreateBlockMutationVariables>;
export const CreatePageDocument = gql`
    mutation createPage($title: String, $emoji: String!, $cover: String!, $userId: Float!) {
  createPage(
    input: {title: $title, emoji: $emoji, cover: $cover, userId: $userId}
  ) {
    cover
    title
    emoji
    pageUrl
  }
}
    `;
export type CreatePageMutationFn = Apollo.MutationFunction<CreatePageMutation, CreatePageMutationVariables>;

/**
 * __useCreatePageMutation__
 *
 * To run a mutation, you first call `useCreatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPageMutation, { data, loading, error }] = useCreatePageMutation({
 *   variables: {
 *      title: // value for 'title'
 *      emoji: // value for 'emoji'
 *      cover: // value for 'cover'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreatePageMutation(baseOptions?: Apollo.MutationHookOptions<CreatePageMutation, CreatePageMutationVariables>) {
        return Apollo.useMutation<CreatePageMutation, CreatePageMutationVariables>(CreatePageDocument, baseOptions);
      }
export type CreatePageMutationHookResult = ReturnType<typeof useCreatePageMutation>;
export type CreatePageMutationResult = Apollo.MutationResult<CreatePageMutation>;
export type CreatePageMutationOptions = Apollo.BaseMutationOptions<CreatePageMutation, CreatePageMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      email
    }
    accessToken
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    user {
      id
      email
    }
    accessToken
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RevokeRefreshTokensDocument = gql`
    mutation revokeRefreshTokens($userId: Int!) {
  revokeRefreshTokensForUser(userId: $userId)
}
    `;
export type RevokeRefreshTokensMutationFn = Apollo.MutationFunction<RevokeRefreshTokensMutation, RevokeRefreshTokensMutationVariables>;

/**
 * __useRevokeRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRevokeRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokeRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokeRefreshTokensMutation, { data, loading, error }] = useRevokeRefreshTokensMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRevokeRefreshTokensMutation(baseOptions?: Apollo.MutationHookOptions<RevokeRefreshTokensMutation, RevokeRefreshTokensMutationVariables>) {
        return Apollo.useMutation<RevokeRefreshTokensMutation, RevokeRefreshTokensMutationVariables>(RevokeRefreshTokensDocument, baseOptions);
      }
export type RevokeRefreshTokensMutationHookResult = ReturnType<typeof useRevokeRefreshTokensMutation>;
export type RevokeRefreshTokensMutationResult = Apollo.MutationResult<RevokeRefreshTokensMutation>;
export type RevokeRefreshTokensMutationOptions = Apollo.BaseMutationOptions<RevokeRefreshTokensMutation, RevokeRefreshTokensMutationVariables>;
export const UpdateBlockDocument = gql`
    mutation updateBlock($content: String!, $type: String!, $blockId: Int!) {
  updateBlock(content: $content, type: $type, blockId: $blockId)
}
    `;
export type UpdateBlockMutationFn = Apollo.MutationFunction<UpdateBlockMutation, UpdateBlockMutationVariables>;

/**
 * __useUpdateBlockMutation__
 *
 * To run a mutation, you first call `useUpdateBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlockMutation, { data, loading, error }] = useUpdateBlockMutation({
 *   variables: {
 *      content: // value for 'content'
 *      type: // value for 'type'
 *      blockId: // value for 'blockId'
 *   },
 * });
 */
export function useUpdateBlockMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlockMutation, UpdateBlockMutationVariables>) {
        return Apollo.useMutation<UpdateBlockMutation, UpdateBlockMutationVariables>(UpdateBlockDocument, baseOptions);
      }
export type UpdateBlockMutationHookResult = ReturnType<typeof useUpdateBlockMutation>;
export type UpdateBlockMutationResult = Apollo.MutationResult<UpdateBlockMutation>;
export type UpdateBlockMutationOptions = Apollo.BaseMutationOptions<UpdateBlockMutation, UpdateBlockMutationVariables>;
export const UpdatePageDocument = gql`
    mutation updatePage($title: String, $cover: String, $emoji: String, $pageId: Float!) {
  updatePage(
    input: {title: $title, emoji: $emoji, cover: $cover}
    pageId: $pageId
  )
}
    `;
export type UpdatePageMutationFn = Apollo.MutationFunction<UpdatePageMutation, UpdatePageMutationVariables>;

/**
 * __useUpdatePageMutation__
 *
 * To run a mutation, you first call `useUpdatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageMutation, { data, loading, error }] = useUpdatePageMutation({
 *   variables: {
 *      title: // value for 'title'
 *      cover: // value for 'cover'
 *      emoji: // value for 'emoji'
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function useUpdatePageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageMutation, UpdatePageMutationVariables>) {
        return Apollo.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(UpdatePageDocument, baseOptions);
      }
export type UpdatePageMutationHookResult = ReturnType<typeof useUpdatePageMutation>;
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutation>;
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<UpdatePageMutation, UpdatePageMutationVariables>;
export const UpdatePageTitleDocument = gql`
    mutation updatePageTitle($title: String!, $pageId: Float!) {
  updatePageTitle(title: $title, pageId: $pageId)
}
    `;
export type UpdatePageTitleMutationFn = Apollo.MutationFunction<UpdatePageTitleMutation, UpdatePageTitleMutationVariables>;

/**
 * __useUpdatePageTitleMutation__
 *
 * To run a mutation, you first call `useUpdatePageTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageTitleMutation, { data, loading, error }] = useUpdatePageTitleMutation({
 *   variables: {
 *      title: // value for 'title'
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function useUpdatePageTitleMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageTitleMutation, UpdatePageTitleMutationVariables>) {
        return Apollo.useMutation<UpdatePageTitleMutation, UpdatePageTitleMutationVariables>(UpdatePageTitleDocument, baseOptions);
      }
export type UpdatePageTitleMutationHookResult = ReturnType<typeof useUpdatePageTitleMutation>;
export type UpdatePageTitleMutationResult = Apollo.MutationResult<UpdatePageTitleMutation>;
export type UpdatePageTitleMutationOptions = Apollo.BaseMutationOptions<UpdatePageTitleMutation, UpdatePageTitleMutationVariables>;
export const ByeDocument = gql`
    query bye {
  bye
}
    `;

/**
 * __useByeQuery__
 *
 * To run a query within a React component, call `useByeQuery` and pass it any options that fit your needs.
 * When your component renders, `useByeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useByeQuery({
 *   variables: {
 *   },
 * });
 */
export function useByeQuery(baseOptions?: Apollo.QueryHookOptions<ByeQuery, ByeQueryVariables>) {
        return Apollo.useQuery<ByeQuery, ByeQueryVariables>(ByeDocument, baseOptions);
      }
export function useByeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ByeQuery, ByeQueryVariables>) {
          return Apollo.useLazyQuery<ByeQuery, ByeQueryVariables>(ByeDocument, baseOptions);
        }
export type ByeQueryHookResult = ReturnType<typeof useByeQuery>;
export type ByeLazyQueryHookResult = ReturnType<typeof useByeLazyQuery>;
export type ByeQueryResult = Apollo.QueryResult<ByeQuery, ByeQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    id
    email
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const GetPageDocument = gql`
    query getPage($pageUrl: String!) {
  page(pageUrl: $pageUrl) {
    id
    cover
    title
    emoji
    pageUrl
  }
}
    `;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      pageUrl: // value for 'pageUrl'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
        return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, baseOptions);
      }
export function useGetPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
          return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, baseOptions);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<GetPageQuery, GetPageQueryVariables>;
export const GetPagesDocument = gql`
    query getPages($userId: Float!) {
  pages(userId: $userId) {
    id
    createdAt
    updatedAt
    cover
    title
    emoji
    pageUrl
  }
}
    `;

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPagesQuery(baseOptions: Apollo.QueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
        return Apollo.useQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, baseOptions);
      }
export function useGetPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
          return Apollo.useLazyQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, baseOptions);
        }
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<typeof useGetPagesLazyQuery>;
export type GetPagesQueryResult = Apollo.QueryResult<GetPagesQuery, GetPagesQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    email
    password
    tokenVersion
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;