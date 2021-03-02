import "emoji-mart/css/emoji-mart.css";
import { Picker, Emoji } from "emoji-mart";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
    Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useUpdatePageMutation } from "../generated/graphql";

interface PickerButtonProps {
    pageId: number;
    emojiId: string;
}

export const PickerButton: React.FC<PickerButtonProps> = ({
    pageId,
    emojiId,
}) => {
    const [updatePage] = useUpdatePageMutation();
    console.log("emojiId in Picker", emojiId);
    console.log("pageId in Picker", pageId);
    const [emoji, setEmoji] = useState(emojiId);
    console.log(emoji);
    const handleSelect = async (emoji: any) => {
        setEmoji(emoji.id);
        await updatePage({
            variables: {
                emoji: emoji.id,
                pageId: pageId,
            },
        });
    };
    return (
        <Box width="50px">
            <Popover placement="bottom">
                <PopoverTrigger>
                    <Box height="100%">
                        {/* {emoji} */}
                        <Button backgroundColor="transparent">
                            <Emoji emoji={{ id: emoji }} size={80}></Emoji>
                            {/* <Image src=""></Image> */}{" "}
                        </Button>
                    </Box>
                </PopoverTrigger>
                <PopoverContent>
                    <Box width="100%">
                        <Picker
                            set="apple"
                            onSelect={(emoji) => handleSelect(emoji)}
                        />
                    </Box>
                </PopoverContent>
            </Popover>
        </Box>
    );
};
