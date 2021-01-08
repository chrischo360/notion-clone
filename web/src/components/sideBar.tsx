import {
    SearchIcon,
    RepeatClockIcon,
    SettingsIcon,
    TriangleDownIcon,
    DownloadIcon,
    DeleteIcon,
} from "@chakra-ui/icons";
import { Box, IconButton, Button, Text } from "@chakra-ui/react";
import React from "react";

interface SideBarProps {
    user: string;
}

const SideBar: React.FC<SideBarProps> = ({ user }: SideBarProps) => {
    return (
        <Box
            minHeight="1vh"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            height="100%"
            minH="100vh"
            color="rgba(25, 23, 17, 0.6)"
            fontWeight="500"
            bg="rgb(247, 246, 243)"
        >
            {/* <Box>
                <Button variant="ghost" isFullWidth>
                    <Text>{user}</Text>
                </Button>
            </Box> */}
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Button variant="ghost" isFullWidth>
                    <Text>{user}</Text>
                </Button>
                <Button variant="ghost" isFullWidth>
                    <SearchIcon />
                    <Text>Quick Find</Text>
                </Button>
                <Button variant="ghost" isFullWidth>
                    <RepeatClockIcon />
                    <Text>All Updates</Text>
                </Button>
                <Button variant="ghost" isFullWidth>
                    <SettingsIcon />
                    <Text>Settings and Members</Text>
                </Button>
            </Box>
            <Box>
                <Text>Favorites</Text>
            </Box>
            <Box>
                <Text>Private</Text>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Button variant="ghost" isFullWidth>
                    <TriangleDownIcon />
                    <Text>Templates</Text>
                </Button>
                <Button variant="ghost" isFullWidth>
                    <DownloadIcon />
                    <Text>Import</Text>
                </Button>
                <Button variant="ghost" isFullWidth>
                    <DeleteIcon />
                    <Text>Trash</Text>
                </Button>
            </Box>
        </Box>
    );
};

export default SideBar;
