import { Box, Heading, Button, Divider, Text, Input } from "@chakra-ui/core";
import NotionHeader from "../components/header";

const LoginPage: React.FC = () => {
    return (
        <Box>
            <NotionHeader />
            <Box>
                <Box>
                    <Heading>Log In</Heading>
                    <Box>
                        <Button>Continue with Google</Button>
                        <Button>Continue with </Button>
                    </Box>
                </Box>
                <Divider />
                <Box>
                    <Text>Email</Text>
                    <Box>
                        <Input
                            placeholder="Enter Your Email Adress"
                            size="lg"
                            variant="outline"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
