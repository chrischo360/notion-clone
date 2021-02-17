import { Grid } from "@chakra-ui/react";
import React from "react";

interface pagelayoutProps {
    children: React.ReactNode;
}

export const Pagelayout: React.FC<pagelayoutProps> = ({ children }) => {
    return (
        <Grid templateColumns="[sidebar] 238px [content] auto">{children}</Grid>
    );
};
