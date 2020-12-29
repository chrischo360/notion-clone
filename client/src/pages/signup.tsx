import { Box, Heading, Button, Divider } from "@chakra-ui/core";
import NotionHeader from "../components/header";

const SignupPage: React.FC = () => {
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
                <Box></Box>
            </Box>
        </Box>
    );
};

export default SignupPage;
