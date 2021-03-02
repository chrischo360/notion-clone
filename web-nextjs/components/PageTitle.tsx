import { Box, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useUpdatePageMutation } from "../generated/graphql";
import { EditorComponent } from "./Editor";

interface PageTitleProps {
    title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    const [updatePage] = useUpdatePageMutation();
    const [pageTitle, setpageTitle] = useState(title);
    const handleChange = () => {};

    return (
        <Box>
            <EditorComponent />
        </Box>
        // <Heading marginLeft="100px" marginTop="50px" onChange={handleChange}>
        //     <Input>{pageTitle}</Input>
        // </Heading>
    );
};
