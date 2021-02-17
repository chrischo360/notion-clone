import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Box,
    Image,
    Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface userpopoverProps {
    email: string | undefined;
}

export const UserPopOver: React.FC<userpopoverProps> = ({ email }) => {
    const router = useRouter();
    return (
        <Popover placement="right">
            <PopoverTrigger>
                <Box
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        variant="ghost"
                        width="100%"
                        boxSizing="border-box"
                        height="100%"
                    >
                        {/* <Box></Box> */}
                        <Box display="flex">
                            {/* <Box>
                                <Image src="https://lh3.googleusercontent.com/a-/AOh14Gi_5u94AixlIYDy5lugueAN3ttuZD-aFHWF4OLkVg=s100" />
                            </Box> */}
                            <Box>
                                <Text height="100%" fontWeight="700">
                                    {email}
                                </Text>
                            </Box>
                        </Box>
                    </Button>
                </Box>
            </PopoverTrigger>
            <PopoverContent>
                {/* <Box width="500px">Test</Box> */}
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{email}</PopoverHeader>
                <PopoverBody>
                    <Box>
                        <Button
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            Log Out
                        </Button>
                    </Box>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};
