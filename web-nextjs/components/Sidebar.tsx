import { Box, Button, Text } from "@chakra-ui/react";
import {
    SearchIcon,
    RepeatClockIcon,
    SettingsIcon,
    TriangleDownIcon,
    DownloadIcon,
    DeleteIcon,
} from "@chakra-ui/icons";
import React from "react";
import { SidebarPageList } from "./SidebarPageList";
import { UserPopOver } from "./UserPopover";
import { CreatePageButton } from "./CreatePageButton";

interface sidebarProps {
    email: string | undefined;
    userId: number | undefined;
}

export const Sidebar: React.FC<sidebarProps> = ({ email, userId }) => {
    return (
        <Box
            minHeight="1vh"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            height="100%"
            position="relative"
            minH="100vh"
            color="rgba(25, 23, 17, 0.6)"
            fontWeight="500"
            bg="rgb(247, 246, 243)"
            // width="240px"
            width="100%"
            opacity="1"
            // minW="15vw"
        >
            <Box
                display="block"
                // flexShrink={0}
                // flexGrow={0}
                width="100%"
                minH="45px"
            >
                <UserPopOver email={email} />
            </Box>
            <Box
                // display="flex"
                // flexDirection="column"
                display="block"
                alignItems="flex-start"
                justifyContent="flex-start"
                flexGrow={0}
                flexShrink={0}
                boxShadow="transparent"
                width="100%"
            >
                <Box
                    width="100%"
                    // paddingTop="5px"

                    // display="flex"
                    // flexDirection="row"
                    // justifyContent="flex-start"
                    // alignItems="flex-start"
                >
                    <Button variant="ghost" width="100%">
                        <SearchIcon />
                        <Text
                            textAlign="left"
                            width="100%"
                            paddingLeft="10px"
                            fontSize="14px"
                            fontWeight="500"
                        >
                            Quick Find
                        </Text>
                    </Button>
                </Box>
                <Box
                    width="100%"
                    // display="flex"
                    // flexDirection="row"
                    // justifyContent="flex-start"
                    // alignItems="flex-start"
                >
                    <Button variant="ghost" width="100%">
                        <RepeatClockIcon />
                        <Text
                            textAlign="left"
                            width="100%"
                            paddingLeft="10px"
                            fontSize="14px"
                            fontWeight="500"
                        >
                            All Updates
                        </Text>
                    </Button>
                </Box>
                <Box
                    width="100%"
                    // display="flex"
                    // flexDirection="row"
                    // justifyContent="flex-start"
                    // alignItems="flex-start"
                >
                    <Button variant="ghost">
                        <SettingsIcon />
                        <Text
                            textAlign="left"
                            width="100%"
                            paddingLeft="10px"
                            fontSize="14px"
                            fontWeight="500"
                        >
                            Settings and Members
                        </Text>
                    </Button>
                </Box>
            </Box>
            {/* <Box>
                <Text>Favorites</Text>
            </Box>
            <Box>
                <Text>Private</Text>
            </Box> */}
            <Box
                paddingTop="30px"
                width="100%"
                // display="flex"
                // flexDirection="column"
                // alignItems="flex-start"
                // justifyContent="flex-start"
            >
                <Text paddingLeft="10px" fontSize="sm">
                    Favorites
                </Text>
                <CreatePageButton userId={userId} />
                <SidebarPageList userId={userId} />
            </Box>
            <Box
                width="100%"
                paddingTop="30px"
                // display="flex"
                // flexDirection="column"
                // alignItems="flex-start"
                // justifyContent="flex-start"
            >
                <Button width="100%" variant="ghost">
                    <TriangleDownIcon />
                    <Text textAlign="left" width="100%">
                        Templates
                    </Text>
                </Button>
                <Button width="100%" variant="ghost">
                    <DownloadIcon />
                    <Text textAlign="left" width="100%">
                        Import
                    </Text>
                </Button>
                <Button width="100%" variant="ghost">
                    <DeleteIcon />
                    <Text textAlign="left" width="100%">
                        Trash
                    </Text>
                </Button>
            </Box>
        </Box>
    );
};
