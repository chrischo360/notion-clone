import { Box } from "@chakra-ui/react";
import React from "react";

interface frameProps {
    children: React.ReactNode;
}

export const Frame: React.FC<frameProps> = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" width="100%" height="100%">
            {children}
        </Box>
    );
};
