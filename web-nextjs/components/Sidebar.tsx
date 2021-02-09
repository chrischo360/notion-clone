import { Box, Button, Text } from "@chakra-ui/react"
import {
    SearchIcon,
    RepeatClockIcon,
    SettingsIcon,
    TriangleDownIcon,
    DownloadIcon,
    DeleteIcon,
} from "@chakra-ui/icons";
import React from "react"

interface sidebarProps{
    email: string | undefined
}

export const Sidebar: React.FC<sidebarProps> = ({email}) => {
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
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Button variant="ghost">
                    <Text>{email}</Text>
                </Button>
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
            {/* <Box>
                <Text>Favorites</Text>
            </Box>
            <Box>
                <Text>Private</Text>
            </Box> */}
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
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
}