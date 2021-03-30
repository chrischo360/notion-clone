import { Box, Input, Button, Text } from "@chakra-ui/react";
import { Formik, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import { setAccessToken } from "../lib/accessToken";
import { toErrorMap } from "../lib/toErrorMap";
import * as Yup from "yup";
import { useLoginMutation } from "../generated/graphql";
import { useRouter } from "next/router";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
});

export const LoginForm = () => {
    const router = useRouter();
    const [login] = useLoginMutation();
    const [error, setError] = useState("");

    return (
        <Box>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={LoginSchema}
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
                        console.log("ERROR ERROR");
                        setStatus(toErrorMap(response.data.login.errors));
                        // console.log(response.data.login.errors[0].message);
                        setError(response.data.login.errors[0].message);
                    } else if (response && response.data) {
                        console.log("SUCCESS SUCESS");
                        setAccessToken(response.data.login?.accessToken);
                        console.log("SUCCESS SUCESS 1");

                        router.push("/pages/index");
                        console.log("SUCCESS SUCESS 2");
                    }
                    // router.push("/pages/index");
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    errors,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="flex-start"
                            justifyContent="center"
                            width="400px"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                borderColor={
                                    error.length != 0 ? "red" : "black"
                                }
                            >
                                <ErrorMessage name="email" />
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
                                {error.length != 0 && <Text>{error}</Text>}
                                <Button
                                    colorScheme="red"
                                    variant="outline"
                                    mt="20px"
                                    borderRadius="0px"
                                    width="400px"
                                    isLoading={isSubmitting}
                                    type="submit"
                                >
                                    Continue with Email
                                </Button>
                                <Button
                                    variant="link"
                                    mt="20px"
                                    // isLoading={isSubmitting}
                                    // type="submit"
                                >
                                    Forgot password?
                                </Button>
                            </Box>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};
