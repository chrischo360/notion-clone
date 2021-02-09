import { Box, Heading, Button, Input, Text, Avatar } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import NotionHeader from "../components/NotionHeader";
import { useRegisterMutation } from "../generated/graphql";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    const [register] = useRegisterMutation()
    const router = useRouter()
    return (
        <Layout title="Register">
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb="150px"
            >
                <NotionHeader />

                <Heading size="lg" mb="10px" mt="100px">
                    Welcome to Notion
                </Heading>
                <Heading size="sm">
                    First things first, tell us a bit about yourself
                </Heading>
            </Box>
            <Box>
                <Formik
                    initialValues={{
                        password: "",
                        email: "",
                    }}
                    validate={() => {}}
                    onSubmit={async ({email, password}) => {
                        const response = await register({
                            variables: {
                                email, password
                            },
                        });

                        console.log("Response:", response)
                        router.push("/login")
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

                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <Avatar src={values.avatarUrl} />
                                <Button variant="ghost">Change</Button>
                            </Box>


                            <Text>Email</Text>
                            <Input
                                placeholder="email"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                borderRadius="0px"
                                mb="20px"
                            />
                            <Text>Password</Text>
                            <Input
                                placeholder="New Password"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                borderRadius="0px"
                                mb="30px"
                            />
                            {errors.password &&
                                touched.password &&
                                errors.password}
                            <Button type="submit" isLoading={isSubmitting}>
                                Continue
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
            </Box>
        </Layout>
    )
}

export default Register;