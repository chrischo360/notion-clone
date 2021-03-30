import { Box } from "@chakra-ui/react";
import React from "react";
import { useGetPageQuery } from "../generated/graphql";
import { PageTitleEditor } from "./PageTitleEditor";
import { PickerButton } from "./Picker";
import { useAppContext } from "../context/context";
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

    const value = useAppContext();
    console.log("FramePageInformation:", value);

    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <div>{value.me.id}</div>
            <Box width="100%" marginTop="100px">
                <Box marginLeft="100px">
                    <PickerButton
                        pageId={data?.page.id}
                        emojiId={data?.page.emoji}
                    />
                </Box>
                <Box display="flex" flexDirection="column">
                    <PageTitleEditor
                        title={data?.page.title}
                        pageId={data?.page.id}
                    />
                </Box>
            </Box>
        </Box>
    );
};
