import { useGetMeQuery } from "../generated/graphql";

export const getUserId = () => {
    const { data, loading } = useGetMeQuery({ fetchPolicy: "network-only" });
    
    return data?.me?.id
}