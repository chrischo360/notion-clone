import { Box, Heading, Button, Divider, Text, Input } from "@chakra-ui/react";
import NotionHeader from "../src/components/header";
import { FaGoogle, FaApple } from "react-icons/fa";

const LoginPage: React.FC = () => {
    return (
        <Box>
            <NotionHeader />
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                minWidth="2000px"
            >
                <Box display="flex" flexDirection="column" alignItems="center">
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
                </Box>
                {/* <Box minHeight="100px">
                    <Divider orientation="horizontal" width="100px" />
                </Box> */}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    width="400px"
                >
                    <Text>Email</Text>
                    <Box display="flex" flexDirection="column">
                        <Input
                            colorScheme="gray"
                            placeholder="Enter Your Email Adress"
                            size="lg"
                            variant="outline"
                            bg="gray"
                        />
                        <Button
                            colorScheme="red"
                            variant="outline"
                            mt="20px"
                            borderRadius="0px"
                            width="400px"
                        >
                            Continue with Email
                        </Button>
                        <Button variant="link" mt="20px">
                            Forgot password?
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
