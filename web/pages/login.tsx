import { Box, Heading, Button, Divider, Text, Input } from "@chakra-ui/react";
import NotionHeader from "../src/components/header";
import { FaGoogle, FaApple } from "react-icons/fa";
import { useLoginMutation } from "../src/generated/graphql";
import React from "react";
import { Form, Formik } from "formik";

const LoginPage: React.FC = () => {
    const [login] = useLoginMutation();

    return (
        <Box>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validate={() => {}}
                onSubmit={async (values, { setErrors }) => {
                    alert("test");
                    console.log("values", values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
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
                                        placeholder="Enter Your Email Address"
                                        size="lg"
                                        variant="outline"
                                        bg="gray"
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
                                        bg="gray"
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
    );
};

export default LoginPage;
