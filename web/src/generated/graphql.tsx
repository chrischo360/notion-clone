import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Page = {
    __typename?: "Page";
    id: Scalars["ID"];
    cover?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    emoji?: Maybe<Scalars["String"]>;
    blocks?: Maybe<Array<Block>>;
};

export type Block = {
    __typename?: "Block";
    id: Scalars["Int"];
    content: Scalars["String"];
    type?: Maybe<BlockType>;
    boldness?: Maybe<Scalars["Int"]>;
    order?: Maybe<Scalars["Int"]>;
    pageLink?: Maybe<Scalars["String"]>;
    checked?: Maybe<Scalars["Boolean"]>;
    indentationLevel?: Maybe<Scalars["Int"]>;
    page: Page;
};

/** The basic block types */
export enum BlockType {
    Text = "TEXT",
    Heading = "HEADING",
    Page = "PAGE",
    Bullet = "BULLET",
    Numbered = "NUMBERED",
    Todo = "TODO",
    Toggle = "TOGGLE",
}

export type User = {
    __typename?: "User";
    id: Scalars["ID"];
    username: Scalars["String"];
    email: Scalars["String"];
};

export type BlockInput = {
    content: Scalars["String"];
    pageId: Scalars["Float"];
};

export type BlockInputUpdate = {
    id: Scalars["Int"];
    content: Scalars["String"];
    type?: Maybe<BlockType>;
    boldness?: Maybe<Scalars["Int"]>;
    order?: Maybe<Scalars["Int"]>;
    pageLink?: Maybe<Scalars["String"]>;
    checked?: Maybe<Scalars["Boolean"]>;
    indentationLevel?: Maybe<Scalars["Int"]>;
};

export type PageInput = {
    cover?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    emoji?: Maybe<Scalars["String"]>;
};

export type PageUpdateInput = {
    id: Scalars["ID"];
    cover?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    emoji?: Maybe<Scalars["String"]>;
};

export type RegisterInput = {
    username: Scalars["String"];
    password: Scalars["String"];
    email: Scalars["String"];
};

export type LoginInput = {
    username: Scalars["String"];
    password: Scalars["String"];
};

export type ChangePasswordInput = {
    token: Scalars["String"];
    password: Scalars["String"];
};

export type Query = {
    __typename?: "Query";
    getBlock: Block;
    getAllBlocks: Array<Block>;
    getPage: Page;
    getAllPages: Array<Page>;
    hello: Scalars["String"];
    me?: Maybe<User>;
};

export type QueryGetBlockArgs = {
    blockId: Scalars["Float"];
};

export type QueryGetPageArgs = {
    pageId: Scalars["Float"];
};

export type Mutation = {
    __typename?: "Mutation";
    createBlock: Block;
    createPage: Page;
    updatePage: Scalars["Boolean"];
    register: User;
    login?: Maybe<User>;
    confirmUser?: Maybe<Scalars["Boolean"]>;
    forgotPassword: Scalars["Boolean"];
    updatePassword?: Maybe<User>;
    logout: Scalars["Boolean"];
};

export type MutationCreateBlockArgs = {
    input: BlockInput;
};

export type MutationCreatePageArgs = {
    input: PageInput;
};

export type MutationUpdatePageArgs = {
    input: PageUpdateInput;
};

export type MutationRegisterArgs = {
    input: RegisterInput;
};

export type MutationLoginArgs = {
    input: LoginInput;
};

export type MutationConfirmUserArgs = {
    token: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
    email: Scalars["String"];
};

export type MutationUpdatePasswordArgs = {
    input: ChangePasswordInput;
};

export type ConfirmUserMutationVariables = Exact<{
    token: Scalars["String"];
}>;

export type ConfirmUserMutation = { __typename?: "Mutation" } & Pick<
    Mutation,
    "confirmUser"
>;

export type CreateBlockMutationVariables = Exact<{
    input: BlockInput;
}>;

export type CreateBlockMutation = { __typename?: "Mutation" } & {
    createBlock: { __typename?: "Block" } & Pick<
        Block,
        | "id"
        | "content"
        | "type"
        | "boldness"
        | "order"
        | "pageLink"
        | "checked"
        | "indentationLevel"
    > & { page: { __typename?: "Page" } & Pick<Page, "id"> };
};

export type CreatePageMutationVariables = Exact<{
    input: PageInput;
}>;

export type CreatePageMutation = { __typename?: "Mutation" } & {
    createPage: { __typename?: "Page" } & Pick<
        Page,
        "id" | "cover" | "title" | "emoji"
    >;
};

export type ForgotPasswordMutationVariables = Exact<{
    email: Scalars["String"];
}>;

export type ForgotPasswordMutation = { __typename?: "Mutation" } & Pick<
    Mutation,
    "forgotPassword"
>;

export type LoginMutationVariables = Exact<{
    input: LoginInput;
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
    login?: Maybe<
        { __typename?: "User" } & Pick<User, "id" | "username" | "email">
    >;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation" } & Pick<
    Mutation,
    "logout"
>;

export type RegisterMutationVariables = Exact<{
    username: Scalars["String"];
    password: Scalars["String"];
    email: Scalars["String"];
}>;

export type RegisterMutation = { __typename?: "Mutation" } & {
    register: { __typename?: "User" } & Pick<User, "username" | "email">;
};

export type UpdatePageMutationVariables = Exact<{
    input: PageUpdateInput;
}>;

export type UpdatePageMutation = { __typename?: "Mutation" } & Pick<
    Mutation,
    "updatePage"
>;

export type UpdatePasswordMutationVariables = Exact<{
    input: ChangePasswordInput;
}>;

export type UpdatePasswordMutation = { __typename?: "Mutation" } & {
    updatePassword?: Maybe<
        { __typename?: "User" } & Pick<User, "id" | "username" | "email">
    >;
};

export type GetAllPagesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPagesQuery = { __typename?: "Query" } & {
    getAllPages: Array<
        { __typename?: "Page" } & Pick<
            Page,
            "id" | "cover" | "title" | "emoji"
        > & {
                blocks?: Maybe<
                    Array<
                        { __typename?: "Block" } & Pick<
                            Block,
                            | "id"
                            | "content"
                            | "type"
                            | "boldness"
                            | "order"
                            | "pageLink"
                            | "checked"
                            | "indentationLevel"
                        >
                    >
                >;
            }
    >;
};

export type GetBlockQueryVariables = Exact<{
    blockId: Scalars["Float"];
}>;

export type GetBlockQuery = { __typename?: "Query" } & {
    getBlock: { __typename?: "Block" } & Pick<
        Block,
        | "id"
        | "content"
        | "type"
        | "boldness"
        | "order"
        | "pageLink"
        | "checked"
        | "indentationLevel"
    > & { page: { __typename?: "Page" } & Pick<Page, "id" | "title"> };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & {
    me?: Maybe<{ __typename?: "User" } & Pick<User, "username" | "email">>;
};

export type GetPageQueryVariables = Exact<{
    pageId: Scalars["Float"];
}>;

export type GetPageQuery = { __typename?: "Query" } & {
    getPage: { __typename?: "Page" } & Pick<
        Page,
        "id" | "cover" | "title" | "emoji"
    >;
};

export const ConfirmUserDocument = gql`
    mutation confirmUser($token: String!) {
        confirmUser(token: $token)
    }
`;
export type ConfirmUserMutationFn = Apollo.MutationFunction<
    ConfirmUserMutation,
    ConfirmUserMutationVariables
>;

/**
 * __useConfirmUserMutation__
 *
 * To run a mutation, you first call `useConfirmUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmUserMutation, { data, loading, error }] = useConfirmUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmUserMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ConfirmUserMutation,
        ConfirmUserMutationVariables
    >
) {
    return Apollo.useMutation<
        ConfirmUserMutation,
        ConfirmUserMutationVariables
    >(ConfirmUserDocument, baseOptions);
}
export type ConfirmUserMutationHookResult = ReturnType<
    typeof useConfirmUserMutation
>;
export type ConfirmUserMutationResult = Apollo.MutationResult<ConfirmUserMutation>;
export type ConfirmUserMutationOptions = Apollo.BaseMutationOptions<
    ConfirmUserMutation,
    ConfirmUserMutationVariables
>;
export const CreateBlockDocument = gql`
    mutation createBlock($input: BlockInput!) {
        createBlock(input: $input) {
            id
            content
            type
            boldness
            order
            pageLink
            checked
            indentationLevel
            page {
                id
            }
        }
    }
`;
export type CreateBlockMutationFn = Apollo.MutationFunction<
    CreateBlockMutation,
    CreateBlockMutationVariables
>;

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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBlockMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateBlockMutation,
        CreateBlockMutationVariables
    >
) {
    return Apollo.useMutation<
        CreateBlockMutation,
        CreateBlockMutationVariables
    >(CreateBlockDocument, baseOptions);
}
export type CreateBlockMutationHookResult = ReturnType<
    typeof useCreateBlockMutation
>;
export type CreateBlockMutationResult = Apollo.MutationResult<CreateBlockMutation>;
export type CreateBlockMutationOptions = Apollo.BaseMutationOptions<
    CreateBlockMutation,
    CreateBlockMutationVariables
>;
export const CreatePageDocument = gql`
    mutation createPage($input: PageInput!) {
        createPage(input: $input) {
            id
            cover
            title
            emoji
        }
    }
`;
export type CreatePageMutationFn = Apollo.MutationFunction<
    CreatePageMutation,
    CreatePageMutationVariables
>;

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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePageMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreatePageMutation,
        CreatePageMutationVariables
    >
) {
    return Apollo.useMutation<CreatePageMutation, CreatePageMutationVariables>(
        CreatePageDocument,
        baseOptions
    );
}
export type CreatePageMutationHookResult = ReturnType<
    typeof useCreatePageMutation
>;
export type CreatePageMutationResult = Apollo.MutationResult<CreatePageMutation>;
export type CreatePageMutationOptions = Apollo.BaseMutationOptions<
    CreatePageMutation,
    CreatePageMutationVariables
>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
        forgotPassword(email: $email)
    }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ForgotPasswordMutation,
        ForgotPasswordMutationVariables
    >
) {
    return Apollo.useMutation<
        ForgotPasswordMutation,
        ForgotPasswordMutationVariables
    >(ForgotPasswordDocument, baseOptions);
}
export type ForgotPasswordMutationHookResult = ReturnType<
    typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
>;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
        login(input: $input) {
            id
            username
            email
        }
    }
`;
export type LoginMutationFn = Apollo.MutationFunction<
    LoginMutation,
    LoginMutationVariables
>;

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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
    baseOptions?: Apollo.MutationHookOptions<
        LoginMutation,
        LoginMutationVariables
    >
) {
    return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
        LoginDocument,
        baseOptions
    );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
    LoginMutation,
    LoginMutationVariables
>;
export const LogoutDocument = gql`
    mutation logout {
        logout
    }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
    LogoutMutation,
    LogoutMutationVariables
>;

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
export function useLogoutMutation(
    baseOptions?: Apollo.MutationHookOptions<
        LogoutMutation,
        LogoutMutationVariables
    >
) {
    return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
        LogoutDocument,
        baseOptions
    );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
    LogoutMutation,
    LogoutMutationVariables
>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $email: String!) {
        register(
            input: { username: $username, password: $password, email: $email }
        ) {
            username
            email
        }
    }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
    RegisterMutation,
    RegisterMutationVariables
>;

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
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(
    baseOptions?: Apollo.MutationHookOptions<
        RegisterMutation,
        RegisterMutationVariables
    >
) {
    return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
        RegisterDocument,
        baseOptions
    );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
    RegisterMutation,
    RegisterMutationVariables
>;
export const UpdatePageDocument = gql`
    mutation updatePage($input: PageUpdateInput!) {
        updatePage(input: $input)
    }
`;
export type UpdatePageMutationFn = Apollo.MutationFunction<
    UpdatePageMutation,
    UpdatePageMutationVariables
>;

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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePageMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdatePageMutation,
        UpdatePageMutationVariables
    >
) {
    return Apollo.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(
        UpdatePageDocument,
        baseOptions
    );
}
export type UpdatePageMutationHookResult = ReturnType<
    typeof useUpdatePageMutation
>;
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutation>;
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<
    UpdatePageMutation,
    UpdatePageMutationVariables
>;
export const UpdatePasswordDocument = gql`
    mutation updatePassword($input: ChangePasswordInput!) {
        updatePassword(input: $input) {
            id
            username
            email
        }
    }
`;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<
    UpdatePasswordMutation,
    UpdatePasswordMutationVariables
>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePasswordMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdatePasswordMutation,
        UpdatePasswordMutationVariables
    >
) {
    return Apollo.useMutation<
        UpdatePasswordMutation,
        UpdatePasswordMutationVariables
    >(UpdatePasswordDocument, baseOptions);
}
export type UpdatePasswordMutationHookResult = ReturnType<
    typeof useUpdatePasswordMutation
>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<
    UpdatePasswordMutation,
    UpdatePasswordMutationVariables
>;
export const GetAllPagesDocument = gql`
    query GetAllPages {
        getAllPages {
            id
            cover
            title
            emoji
            blocks {
                id
                content
                type
                boldness
                order
                pageLink
                checked
                indentationLevel
            }
        }
    }
`;

/**
 * __useGetAllPagesQuery__
 *
 * To run a query within a React component, call `useGetAllPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPagesQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetAllPagesQuery,
        GetAllPagesQueryVariables
    >
) {
    return Apollo.useQuery<GetAllPagesQuery, GetAllPagesQueryVariables>(
        GetAllPagesDocument,
        baseOptions
    );
}
export function useGetAllPagesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetAllPagesQuery,
        GetAllPagesQueryVariables
    >
) {
    return Apollo.useLazyQuery<GetAllPagesQuery, GetAllPagesQueryVariables>(
        GetAllPagesDocument,
        baseOptions
    );
}
export type GetAllPagesQueryHookResult = ReturnType<typeof useGetAllPagesQuery>;
export type GetAllPagesLazyQueryHookResult = ReturnType<
    typeof useGetAllPagesLazyQuery
>;
export type GetAllPagesQueryResult = Apollo.QueryResult<
    GetAllPagesQuery,
    GetAllPagesQueryVariables
>;
export const GetBlockDocument = gql`
    query GetBlock($blockId: Float!) {
        getBlock(blockId: $blockId) {
            id
            content
            type
            boldness
            order
            pageLink
            checked
            indentationLevel
            page {
                id
                title
            }
        }
    }
`;

/**
 * __useGetBlockQuery__
 *
 * To run a query within a React component, call `useGetBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlockQuery({
 *   variables: {
 *      blockId: // value for 'blockId'
 *   },
 * });
 */
export function useGetBlockQuery(
    baseOptions: Apollo.QueryHookOptions<GetBlockQuery, GetBlockQueryVariables>
) {
    return Apollo.useQuery<GetBlockQuery, GetBlockQueryVariables>(
        GetBlockDocument,
        baseOptions
    );
}
export function useGetBlockLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetBlockQuery,
        GetBlockQueryVariables
    >
) {
    return Apollo.useLazyQuery<GetBlockQuery, GetBlockQueryVariables>(
        GetBlockDocument,
        baseOptions
    );
}
export type GetBlockQueryHookResult = ReturnType<typeof useGetBlockQuery>;
export type GetBlockLazyQueryHookResult = ReturnType<
    typeof useGetBlockLazyQuery
>;
export type GetBlockQueryResult = Apollo.QueryResult<
    GetBlockQuery,
    GetBlockQueryVariables
>;
export const MeDocument = gql`
    query Me {
        me {
            username
            email
        }
    }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
    baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
    return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
    return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(
        MeDocument,
        baseOptions
    );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetPageDocument = gql`
    query getPage($pageId: Float!) {
        getPage(pageId: $pageId) {
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
export function useGetPageQuery(
    baseOptions: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables>
) {
    return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(
        GetPageDocument,
        baseOptions
    );
}
export function useGetPageLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetPageQuery,
        GetPageQueryVariables
    >
) {
    return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(
        GetPageDocument,
        baseOptions
    );
}
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<
    GetPageQuery,
    GetPageQueryVariables
>;
