import { Avatar, Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { useRouter } from "next/router";
import { useRegisterMutation } from "../src/generated/graphql";

interface registerProps {}

const OnBoardingPage: React.FC<registerProps> = ({}) => {
    const [register] = useRegisterMutation();
    const router = useRouter();
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb="150px"
            >
                <Heading size="lg" mb="10px" mt="20px">
                    Welcome to Notion
                </Heading>
                <Heading size="sm">
                    First things first, tell us a bit about yourself
                </Heading>
            </Box>
            <Box>
                <Formik
                    initialValues={{
                        username: "",
                        // lastName: "",
                        password: "",
                        // avatarUrl: "",
                        email: "",
                    }}
                    validate={() => {}}
                    onSubmit={async (values, { setErrors }) => {
                        console.log("values", values);
                        // const setValues = {
                        //   username: "changes?",
                        //   password: "gijsdiaosfouabf",
                        //   email: "chris@gmail.com",
                        // };
                        const response = await register({
                            variables: {
                                username: values.username,
                                email: values.email,
                                password: values.password,
                            },
                        });
                        // if (response.data?.register.errors) {
                        //     setErrors(
                        //         toErrorMap(response.data.register.errors)
                        //     );
                        // } else if (response.data?.register.user) {
                        //     // worked
                        //     router.push("/");
                        // }
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
                                {/* <Avatar src={values.avatarUrl} /> */}
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

                            <Text>First Name</Text>
                            <Input
                                placeholder="Ada"
                                type="username"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                borderRadius="0px"
                                mb="20px"
                            />
                            {errors.name && touched.name && errors.name}
                            {/* {errors.firstName && touched.firstName && errors.firstName} */}
                            {/* <Text>Last Name</Text>
              <Input
                placeholder="Lovelace"
                type="lastName"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                borderRadius="0px"
                mb="20px"
              />
              {errors.lastName && touched.lastName && errors.lastName} */}
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
    );
};

export default OnBoardingPage;
