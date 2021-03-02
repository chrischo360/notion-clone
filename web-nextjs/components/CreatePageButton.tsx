import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useCreatePageMutation } from "../generated/graphql";

interface CreatePageButtonProps {
    userId: number;
}

export const CreatePageButton: React.FC<CreatePageButtonProps> = ({
    userId,
}) => {
    const router = useRouter();
    const [createPage] = useCreatePageMutation();
    const handleClick = async () => {
        const response = await createPage({
            variables: {
                cover: "",
                emoji: "",
                userId: userId,
            },
        });
        router.push(`/pages/${response.data?.createPage.pageUrl}`);
    };
    return (
        <Box
            display="flex"
            height="30px"
            justifyContent="space-between"
            alignItems="center"
        >
            <Text paddingLeft="10px" fontSize="sm">
                Private
            </Text>
            <Button
                leftIcon={<PlusSquareIcon />}
                // colorScheme="teal"
                variant="ghost"
                onClick={handleClick}
            ></Button>
        </Box>
    );
};
