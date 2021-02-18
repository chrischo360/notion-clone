import { Box, Heading, Button, Divider } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import NotionHeader from "../components/NotionHeader";
import { FaGoogle, FaApple } from "react-icons/fa";
import { LoginForm } from "../components/LoginForm";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
    return (
        <Layout title="Login">
            <Box>
                <NotionHeader />
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    minWidth="1vw"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Heading size="2xl" mt="150px">
                            Log In
                        </Heading>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Button
                                colorScheme="red"
                                leftIcon={<FaGoogle />}
                                mt="20px"
                                width="400px"
                                borderRadius="0px"
                            >
                                Continue with Google
                            </Button>
                            <Button
                                colorScheme="white"
                                leftIcon={<FaApple />}
                                color="black"
                                variant="outline"
                                mt="20px"
                                borderRadius="0px"
                                width="400px"
                            >
                                Continue with Apple
                            </Button>
                        </Box>
                        <Divider
                            orientation="horizontal"
                            width="500px"
                            margin="50px"
                        />
                        <LoginForm />
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default Login;
