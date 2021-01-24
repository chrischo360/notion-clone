import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import gql from "graphql-tag";
import React from "react";
import {
    useRegisterMutation,
    useLoginMutation,
} from "../src/generated/graphql";
import { setContext } from "apollo-link-context";
import { useRouter } from "next/router";

interface SignUpProps {}

const SampleSignUp: React.FC<SignUpProps> = ({}) => {
    const router = useRouter();
    const [registerMutation, { data, error, loading }] = useRegisterMutation();

    return (
        <Formik
            initialValues={{ email: "", name: "", password: "" }}
            onSubmit={async (values) => {
                console.log("test");
                try {
                    const response = await registerMutation({
                        variables: {
                            email: values.email,
                            name: values.name,
                            password: values.password,
                        },
                    });
                } catch (e) {
                    console.log("Error: ", e);
                }
                // console.log(response.data?.register?.token);
                const token = response.data?.register?.token;
                console.log("token: ", token);
                try {
                    localStorage.setItem("AUTH_TOKEN", token);
                } catch (e) {
                    console.log("Error ", e);
                }

                // const authLink = setContext(async (_, { headers }) => {
                //     const token = await localStorage.getItem("AUTH_TOKEN");
                //     return {
                //         headers: {
                //             ...headers,
                //             authorization: token ? `Bearer ${token}` : "",
                //         },
                //     };
                // });

                console.log("response:", response);
                // console.log("authLink:", authLink);
                // router.push("/posts");
            }}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <Field name="name">
                        {({ field, form }) => (
                            <FormControl
                                isInvalid={
                                    form.errors.name && form.touched.name
                                }
                            >
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input
                                    {...field}
                                    id="name"
                                    placeholder="name"
                                />
                                <FormErrorMessage>
                                    {form.errors.name}
                                </FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>

                    <Field name="email">
                        {({ field, form }) => (
                            <FormControl
                                isInvalid={
                                    form.errors.email && form.touched.email
                                }
                            >
                                <FormLabel htmlFor="name">Email</FormLabel>
                                <Input
                                    {...field}
                                    id="email"
                                    placeholder="email"
                                />
                                <FormErrorMessage>
                                    {form.errors.email}
                                </FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>

                    <Field name="password">
                        {({ field, form }) => (
                            <FormControl
                                isInvalid={
                                    form.errors.password &&
                                    form.touched.password
                                }
                            >
                                <FormLabel htmlFor="password">
                                    Password
                                </FormLabel>
                                <Input
                                    {...field}
                                    id="password"
                                    placeholder="password"
                                />
                                <FormErrorMessage>
                                    {form.errors.password}
                                </FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>

                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default SampleSignUp;
