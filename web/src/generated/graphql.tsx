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
};

export type Page = {
  __typename?: 'Page';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<Scalars['Boolean']>;
  login?: Maybe<AuthPayload>;
  logout?: Maybe<Scalars['Boolean']>;
  revokeRefreshTokensForUser?: Maybe<Scalars['Boolean']>;
  createPage?: Maybe<Page>;
  createBlock?: Maybe<Block>;
  updatePage?: Maybe<Page>;
  updateBlock?: Maybe<Block>;
  deletePage?: Maybe<Page>;
  deleteBlock?: Maybe<Block>;
};


export type MutationRegisterArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};


export type MutationCreatePageArgs = {
  title: Scalars['String'];
  emoji?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};


export type MutationCreateBlockArgs = {
  content: Scalars['String'];
  type: BlockType;
  pageId: Scalars['Int'];
};


export type MutationUpdatePageArgs = {
  title: Scalars['String'];
  emoji?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  pageId: Scalars['Int'];
};


export type MutationUpdateBlockArgs = {
  content: Scalars['String'];
  type: Scalars['String'];
  blockId: Scalars['Int'];
};


export type MutationDeletePageArgs = {
  pageId: Scalars['Int'];
};


export type MutationDeleteBlockArgs = {
  blockId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  bye?: Maybe<Array<Maybe<Scalars['String']>>>;
  users?: Maybe<Array<Maybe<User>>>;
  pages?: Maybe<Array<Maybe<Page>>>;
  blocks?: Maybe<Array<Maybe<Block>>>;
  page?: Maybe<Page>;
  user?: Maybe<User>;
  block?: Maybe<Block>;
};


export type QueryPagesArgs = {
  userId: Scalars['Int'];
};


export type QueryBlocksArgs = {
  pageId: Scalars['Int'];
};


export type QueryPageArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryBlockArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Block = {
  __typename?: 'Block';
  id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum BlockType {
  Text = 'TEXT',
  Heading = 'HEADING',
  Page = 'PAGE',
  Bullet = 'BULLET',
  Numbered = 'NUMBERED',
  Todo = 'TODO',
  Toggle = 'TOGGLE'
}

export type CreateBlockMutationVariables = Exact<{
  content: Scalars['String'];
  type: BlockType;
  pageId: Scalars['Int'];
}>;


export type CreateBlockMutation = (
  { __typename?: 'Mutation' }
  & { createBlock?: Maybe<(
    { __typename?: 'Block' }
    & Pick<Block, 'id' | 'content' | 'type'>
  )> }
);

export type CreatePageMutationVariables = Exact<{
  title: Scalars['String'];
  emoji: Scalars['String'];
  cover: Scalars['String'];
  userId: Scalars['Int'];
}>;


export type CreatePageMutation = (
  { __typename?: 'Mutation' }
  & { createPage?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'title' | 'cover' | 'emoji'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'accessToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name'>
    )> }
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
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
  & { updateBlock?: Maybe<(
    { __typename?: 'Block' }
    & Pick<Block, 'id' | 'content' | 'type'>
  )> }
);

export type UpdatePageMutationVariables = Exact<{
  title: Scalars['String'];
  cover: Scalars['String'];
  emoji: Scalars['String'];
  pageId: Scalars['Int'];
}>;


export type UpdatePageMutation = (
  { __typename?: 'Mutation' }
  & { updatePage?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'title' | 'cover' | 'emoji'>
  )> }
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
    & Pick<User, 'id' | 'email' | 'name'>
  )> }
);

export type GetPageQueryVariables = Exact<{
  pageId: Scalars['Int'];
}>;


export type GetPageQuery = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'cover' | 'title' | 'emoji'>
  )> }
);


export const CreateBlockDocument = gql`
    mutation createBlock($content: String!, $type: BlockType!, $pageId: Int!) {
  createBlock(content: $content, type: $type, pageId: $pageId) {
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
 *      pageId: // value for 'pageId'
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
    mutation createPage($title: String!, $emoji: String!, $cover: String!, $userId: Int!) {
  createPage(title: $title, emoji: $emoji, cover: $cover, userId: $userId) {
    id
    title
    cover
    emoji
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
      name
    }
    accessToken
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
    mutation register($email: String!, $name: String!, $password: String!) {
  register(name: $name, email: $email, password: $password)
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
 *      name: // value for 'name'
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
  updateBlock(content: $content, type: $type, blockId: $blockId) {
    id
    content
    type
  }
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
    mutation updatePage($title: String!, $cover: String!, $emoji: String!, $pageId: Int!) {
  updatePage(title: $title, emoji: $emoji, cover: $cover, pageId: $pageId) {
    id
    title
    cover
    emoji
  }
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
    name
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
    query getPage($pageId: Int!) {
  page(id: $pageId) {
    id
    cover
    title
    emoji
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
 *      pageId: // value for 'pageId'
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