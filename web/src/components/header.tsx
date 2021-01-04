import { Box, Divider, Button, Link, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { SiNotion } from "react-icons/si";
import NavBarLinks from "./navBarLinks";

const NotionHeader: React.FC = () => {
    return (
        <Box minW="100vw" height="100%">
            <Box
                minW="50%"
                width="60%"
                display="flex"
                dir="row"
                justifyContent="space-between"
                margin="auto"
                height="50px"
                marginTop="20px"
            >
                <Box>
                    <NextLink href="/">
                        <Button
                            leftIcon={<SiNotion size="30px" />}
                            variant="ghost"
                            aria-label="Notion Homepage"
                            size="lg"
                            fontSize="15px"
                        >
                            Notion
                        </Button>
                        {/* <IconButton
                            variant="ghost"
                            aria-label="Notion Homepage"
                            size="lg"
                            fontSize="35px"
                            icon={<SiNotion />}
                        /> */}
                    </NextLink>
                </Box>
                <Box>
                    <Box>
                        <NavBarLinks />
                    </Box>
                </Box>
                <Box height="50px">
                    <Divider orientation="vertical" />
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Box marginRight="10px">
                        <Button variant="ghost">
                            <Link>
                                <NextLink href="/login">Login</NextLink>
                            </Link>
                        </Button>
                    </Box>
                    <Box marginLeft="10px">
                        <Button variant="ghost">
                            <Link>
                                <NextLink href="/signup">Signup</NextLink>
                            </Link>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default NotionHeader;
