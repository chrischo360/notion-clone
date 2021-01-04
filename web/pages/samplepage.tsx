import { Box } from "@chakra-ui/react";
import React from "react";
import PageContent from "../src/components/pageContent";
import SideBar from "../src/components/sideBar";
// import SideBar from "../src/components/SideBar";

interface SamplePageProps {
    // title: string;
    // content: string;
}

const SamplePage: React.FC<SamplePageProps> = ({}) => {
    return (
        <Box display="flex">
            <Box flexGrow={1} flexBasis={1}>
                <SideBar user="chrischo360" />
            </Box>
            <Box flexGrow={10}>
                <PageContent content="sample content" />
            </Box>
        </Box>
    );
};

export default SamplePage;
