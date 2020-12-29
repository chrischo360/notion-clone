import { useRadio, HStack, useRadioGroup } from "@chakra-ui/react";
import { Box, Heading, Image } from "@chakra-ui/core";
import React, { SyntheticEvent, useState } from "react";

export const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                bg="white"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                _checked={{
                    bg: "teal.600",
                    color: "white",
                    borderColor: "teal.600",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    );
};

export const Example = () => {
    const options = ["Team Wiki", "Project & Tasks", "Notes and Docs"];
    const [option, setOption] = useState(
        "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/work/carousel-desktop/wiki-v5/en-US.png"
    );
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "choices",
        defaultValue: "Team Wiki",
    });
    const group = getRootProps();
    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        if (event.target.textContent == options[0]) {
            // console.log("test");
            // () =>
            setOption(
                "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/work/carousel-desktop/wiki-v5/en-US.png"
            );
        } else if (event.target.textContent == options[1]) {
            setOption(
                "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/work/carousel-desktop/tasks-v5/en-US.png"
            );
        } else if (event.target.textContent == options[2]) {
            setOption(
                "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/work/carousel-desktop/notes-v5/en-US.png"
            );
        }
    };

    return (
        <Box bg="rgb(249, 245, 241)">
            <Box display="flex" justifyContent="center">
                {options.map((value) => {
                    const radio = getRadioProps({ value });
                    return (
                        <Box onClick={handleClick}>
                            <RadioCard key={value} {...radio} value={option}>
                                {value}
                            </RadioCard>
                        </Box>
                    );
                    ``;
                })}
            </Box>
            <Box size="1500px">
                <Image src={option} />
                <Heading></Heading>
            </Box>
        </Box>
    );
};
