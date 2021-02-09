import { Box } from "@chakra-ui/react"
import React from "react"
import { useGetMeQuery } from "../../generated/graphql";

interface indexProps {

}

const Index: React.FC<indexProps> = () => {
    const { data } = useGetMeQuery({fetchPolicy: 'network-only'});
    return (
        <Box>
            {data?.me?.email}
            {data?.me?.id}
        </Box>
    )
}

export default Index