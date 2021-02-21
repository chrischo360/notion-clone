import { Box, Divider, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { SiNotion } from "react-icons/si";
import NavBarLinks from "./NavbarLinks";

const NotionHeader: React.FC = () => {
    return (
        <Box
            width="100%"
            height="100%"
            // position="fixed" zIndex="99"
        >
            <Box
                // minW="50%"
                width="100%"
                // position="fixed"
                display="flex"
                dir="column"
                justifyContent="center"
                alignItems="center"
                height="50px"
                marginTop="20px"
                fontSize="15px"
                whiteSpace="nowrap"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    maxWidth="1300px"
                    paddingLeft="20px"
                    paddingRight="20px"
                    transition="height 250ms ease 0s"
                    height="80px"
                    position="relative"
                    overflow="hidden"
                    boxShadow="none"
                >
                    <Box flexShrink={0}>
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
                    <Box
                        flex="1 1 0%"
                        display="flex"
                        justifyContent="center"
                    ></Box>
                    {/* <Box display="flex"> */}
                    <NavBarLinks />
                    {/* </Box> */}
                    <Box height="50px">
                        <Divider orientation="vertical" />
                    </Box>
                    <Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexWrap="wrap"
                            transition="transform 200ms ease 0s"
                        >
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
                                        <NextLink href="/register">
                                            Signup
                                        </NextLink>
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default NotionHeader;
