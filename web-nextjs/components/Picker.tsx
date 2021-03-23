import "emoji-mart/css/emoji-mart.css";
import { Picker, Emoji } from "emoji-mart";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
    Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useUpdatePageMutation } from "../generated/graphql";

interface PickerButtonProps {
    pageId: number | undefined;
    emojiId: string | undefined;
}

export const PickerButton: React.FC<PickerButtonProps> = ({
    pageId,
    emojiId,
}) => {
    const [updatePage] = useUpdatePageMutation();
    const [emoji, setEmoji] = useState("");

    useEffect(() => {
        setEmoji(emojiId);
    }, [emojiId]);

    useEffect(() => {
        updatePage({
            variables: {
                emoji: emoji,
                pageId: pageId,
            },
        });
    }, [emoji]);

    const handleSelect = async (emoji: any) => {
        console.log(emoji.id);
        setEmoji(emoji.id);
    };
    return (
        <Box width="50px">
            <Popover placement="bottom">
                <PopoverTrigger>
                    <Box height="100%">
                        {/* {emoji} */}
                        <Button backgroundColor="transparent">
                            <Emoji
                                emoji={{ id: emoji, skin: 3 }}
                                size={80}
                            ></Emoji>
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
