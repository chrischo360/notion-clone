import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useGetPageQuery } from "../generated/graphql";
import { PageTitle } from "./PageTitle";
import { PickerButton } from "./Picker";
// import DynamicComponent from "./DynamicComponent";
// import { EmojiPickerReact } from "./EmojiPickerReact";
// import ExampleEmojiButton from "./ExampleEmojiButton";
// import dynamic from "next/dynamic";

// const DynamicComponentWithNoSSR = dynamic(() => EmojiPickerReact, {
//     ssr: false,
// });

interface framepageInformationProps {
    pageUrl: string;
}

export const FramePageInformation: React.FC<framepageInformationProps> = ({
    pageUrl,
}) => {
    const { data } = useGetPageQuery({
        variables: {
            pageUrl: pageUrl,
        },
    });
    console.log("pageUrl", pageUrl);
    console.log("pageId", data?.page.id);
    console.log("emojiId", data?.page.emoji);
    console.log("title", data?.page.title);

    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box width="100%" marginTop="100px">
                <Box marginLeft="100px">
                    <PickerButton
                        pageId={data?.page.id}
                        emojiId={data?.page.emoji}
                    />
                </Box>
                <PageTitle title={data?.page.title} />
            </Box>
        </Box>
    );
};
