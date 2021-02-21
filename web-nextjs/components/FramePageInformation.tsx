import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useGetPageQuery } from "../generated/graphql";
// import ExampleEmojiButton from "./ExampleEmojiButton";

interface framepageInformationProps {
    pageUrl: string;
    emoji: string;
}

export const FramePageInformation: React.FC<framepageInformationProps> = ({
    pageUrl,
    emoji,
}) => {
    // const trigger = document.querySelector("#emoji-trigger");

    // picker.on("emoji", (selection) => {
    //     // handle the selected emoji here
    //     console.log(selection.emoji);
    // });

    // trigger.addEventListener("click", () => picker.togglePicker(trigger));

    interface framepageInformationProps {
        pageUrl: string;
        emoji: string;
    }
    // const pageId = 1;
    const { data } = useGetPageQuery({
        variables: {
            pageUrl: pageUrl,
        },
    });
    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box width="100%" marginTop="100px">
                {/* <button id="emoji-trigger">
                    <Image
                        marginLeft="100px"
                        boxSize="80px"
                        src={data?.page.emoji}
                    />
                    {picker.showPicker}
                </button> */}
                {/* <ExampleEmojiButton /> */}

                <Heading marginLeft="100px" marginTop="50px">
                    {data?.page.title}
                </Heading>
            </Box>
        </Box>
    );
};
