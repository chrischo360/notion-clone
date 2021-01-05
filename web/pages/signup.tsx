import { Box, Heading, Button, Divider, Text, Input } from "@chakra-ui/react";
import NotionHeader from "../src/components/header";
import { FaGoogle, FaApple } from "react-icons/fa";
import { useRouter } from "next/router";
import React from "react";
import { Form, Formik } from "formik";

interface signupProps {}

const SignupPage: React.FC<signupProps> = () => {
    const router = useRouter();

    return (
        <Box>
            <Formik
                initialValues={{
                    email: "",
                }}
                validate={() => {}}
                onSubmit={async (values, { setErrors }) => {
                    console.log("values", values);
                    router.push("/onboarding");
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
                                    Sign up
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
                            <Box minHeight="100px">
                                <Divider
                                    orientation="horizontal"
                                    width="100px"
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
                                        placeholder="Enter Your Email Adress"
                                        size="lg"
                                        variant="outline"
                                        bg="gray"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        name="email"
                                        type="email"
                                    />
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
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
                                        type="submit"
                                        isLoading={isSubmitting}
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

export default SignupPage;
