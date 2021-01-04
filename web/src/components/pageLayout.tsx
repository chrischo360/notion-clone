import { Box } from "@chakra-ui/react";
import React from "react";

const PageLayout: React.FC = ({ children }) => {
    return (
        <Box display="flex" flexDirection="row">
            {children}
        </Box>
    );
};

export default PageLayout;
