import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useGetMeQuery, useGetPagesQuery } from "../generated/graphql";

interface sidebarpagelistProps {
    userId: number;
}

export const SidebarPageList: React.FC<sidebarpagelistProps> = ({ userId }) => {
    // const { data, loading } = useGetMeQuery({ fetchPolicy: "network-only" });
    console.log(typeof userId);
    const { data, loading, error } = useGetPagesQuery({
        variables: {
            userId: userId,
        },
    });
    const pages = data?.pages;

    if (loading) {
        return <Box>Loading...</Box>;
    }

    if (error) {
        console.log(error);
        return <Box>Error</Box>;
    }

    const listPages = pages?.map((page) => (
        <Button width="100%" variant="ghost" key={page.id}>
            {/* <TriangleDownIcon /> */}
            <Link href={`/pages/${page.title}`}>
                <Text width="100%" textAlign="left">
                    {page.title}
                </Text>
            </Link>
        </Button>
    ));

    return (
        <Box display="flex" flexDirection="column">
            {listPages}
        </Box>
    );
};
