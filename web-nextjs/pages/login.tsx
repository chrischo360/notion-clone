import { Box, Heading, Button, Divider, Input, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import NotionHeader from "../components/NotionHeader";
import { useLoginMutation } from "../generated/graphql";
import { setAccessToken } from "../lib/accessToken";
import { FaGoogle, FaApple } from "react-icons/fa";
import { toErrorMap } from "../lib/toErrorMap";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
    const router = useRouter();
    const [login] = useLoginMutation();

    return (
        <Layout title="Login">
            <Box>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validate={() => {}}
                    onSubmit={async ({ email, password }, { setStatus }) => {
                        console.log("Email:", email, "Password:", password);
                        const response = await login({
                            variables: {
                                email,
                                password,
                            },
                        });
                        console.log("Response:", response);

                        if (response.data?.login.errors) {
                            setStatus(toErrorMap(response.data.login.errors));
                        }

                        if (response && response.data) {
                            setAccessToken(response.data.login?.accessToken);
                        }
                        router.push("/pages/index");
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form onSubmit={handleSubmit}>
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
                                </Box>
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
                                            placeholder="Enter Your Email Address"
                                            size="lg"
                                            variant="outline"
                                            // bg="gray"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <Input
                                            colorScheme="gray"
                                            placeholder="Enter Your password"
                                            size="lg"
                                            variant="outline"
                                            // bg="gray"
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
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
                                        <Button
                                            variant="link"
                                            mt="20px"
                                            isLoading={isSubmitting}
                                            type="submit"
                                        >
                                            Forgot password?
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Layout>
    );
};

export default Login;
