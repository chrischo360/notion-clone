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
            justifyContent="center"
        >
            <Box>
                <Button variant="ghost">
                    <Text>{user}</Text>
                </Button>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Button variant="ghost">
                    <SearchIcon />
                    <Text>Quick Find</Text>
                </Button>
                <Button variant="ghost">
                    <RepeatClockIcon />
                    <Text>All Updates</Text>
                </Button>
                <Button variant="ghost">
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
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Button variant="ghost">
                    <TriangleDownIcon />
                    <Text>Templates</Text>
                </Button>
                <Button variant="ghost">
                    <DownloadIcon />
                    <Text>Import</Text>
                </Button>
                <Button variant="ghost">
                    <DeleteIcon />
                    <Text>Trash</Text>
                </Button>
            </Box>
        </Box>
    );
};

export default SideBar;
