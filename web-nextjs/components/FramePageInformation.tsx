import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useGetPageQuery } from "../generated/graphql";
interface framepageInformationProps {
    title: string;
    emoji: string;
}

export const FramePageInformation: React.FC<framepageInformationProps> = ({
    title,
}) => {
    const {data} = useGetPageQuery({
        variables: {
            pageId: 
        }
    })
    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box width="100%" marginTop="100px">
                <Image
                    marginLeft="100px"
                    boxSize="80px"
                    src="https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f914.svg"
                />
                <Heading marginLeft="100px" marginTop="50px">
                    {title}
                </Heading>
            </Box>
        </Box>
    );
};
