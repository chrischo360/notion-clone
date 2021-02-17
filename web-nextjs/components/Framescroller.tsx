import { Box } from "@chakra-ui/react";
import React from "react";
import { EditorComponent } from "./Editor";

interface framescrollerProps {}

export const FrameScroller: React.FC<framescrollerProps> = ({}) => {
    return (
        <Box display="flex" flexDirection="column">
            <EditorComponent />
        </Box>
    );
};
