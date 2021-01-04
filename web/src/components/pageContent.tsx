import { Box } from "@chakra-ui/react";
import React from "react";

interface PageContentProps {
    content: string;
}

const PageContent: React.FC<PageContentProps> = ({
    content,
}: PageContentProps) => {
    return (
        <Box minHeight="1vh" display="flex" flexDirection="column">
            <Box>{content}</Box>
        </Box>
    );
};

export default PageContent;
