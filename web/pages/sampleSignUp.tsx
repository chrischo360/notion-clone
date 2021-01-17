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

interface SignUpProps {}

const SampleSignUp: React.FC<SignUpProps> = ({}) => {
    const [registerMutation, { data, loading, error }] = useRegisterMutation();

    const _confirm = async (data) => {
        const { token } = data.userLogin;
        _saveUserData(token);
    };

    const _saveUserData = async (token) => {
        try {
            await localStorage.setItem(AUTH_TOKEN, token);
        } catch (e) {
            console.log("ERROR: ", e);
        }
    };

    return (
        <Formik
            initialValues={{ email: "", name: "", password: "" }}
            onSubmit={() => _confirm()}
        >
            {(props) => (
                <Form>
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

                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    {...field}
                                    id="email"
                                    placeholder="email"
                                />
                                <FormErrorMessage>
                                    {form.errors.email}
                                </FormErrorMessage>

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
                        isLoading={props.isSubmitting}
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
