import { useGetPagesQuery } from "../generated/graphql"

export const getPages = ({userId} : any) => {
    const {data, loading} = useGetPagesQuery({
        variables: {
            userId:  userId
        }
    })

    return data?.pages
}
