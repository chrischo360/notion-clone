import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Text,
} from "@chakra-ui/react";
import React from "react";

interface frameheaderProps {}

export const FrameHeader: React.FC<frameheaderProps> = ({}) => {
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            // position="absolute"
            height="45px"
            paddingLeft="10px"
            paddingRight="10px"
            overflow="hidden"
            // minW="100%"
            width="100%"
            minWidth="100%"
            maxWidth="100vw"
        >
            <Box paddingLeft="20px">
                <Breadcrumb fontWeight="medium" fontSize="sm">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Current</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Box display="flex">
                <Box>
                    <Button variant="ghost">
                        <Text fontSize="sm">Share</Text>
                    </Button>
                </Box>
                <Box>
                    <Button variant="ghost">
                        <Text fontSize="sm">Updates</Text>
                    </Button>
                </Box>
                <Box>
                    <Button variant="ghost">
                        <Text fontSize="sm">Favorite</Text>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
