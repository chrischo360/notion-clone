import React from "react";
import { useUsersQuery } from "../generated/graphql";
import Layout from "../components/Layout";
import NotionHeader from "../components/NotionHeader";
import { Box, Heading, Input, Button, Image } from "@chakra-ui/react";
// import {Showcase} from "../components/Showcase";

const Index = () => {
    const { data } = useUsersQuery({ fetchPolicy: "network-only" });

    if (!data) {
        return (
            <Layout title="Loading...">
                <div>loading...</div>
            </Layout>
        );
    }

    return (
        <Layout title="Notion - The All in-one workspace">
            <NotionHeader />
            <Box minW="100%" minH="100vh" marginTop="70px">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box
                        size="500px"
                        margin="50px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Image
                            maxHeight="200px"
                            margin="20px"
                            src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/product/hero.png"
                            objectFit="cover"
                        ></Image>
                        <Heading size="2xl" fontSize="50px" margin="10px">
                            All-in-one workspace
                        </Heading>
                        <Heading size="lg" fontSize="20px" margin="10px">
                            One tool for your whole team. Write, plan, and get
                            organized
                        </Heading>
                        <Box margin="30px" display="flex">
                            <Box size="lg">
                                <Input
                                    // fontSize="20px"
                                    placeholder="Enter your email"
                                    borderRadius="0px"
                                />
                            </Box>
                            <Button
                                ml="15px"
                                variant="solid"
                                colorScheme="red"
                                borderRadius="0px"
                            >
                                Sign up
                            </Button>
                        </Box>
                        <Heading>
                            For teams & individuals — web, mobile, Mac, Windows.
                        </Heading>
                    </Box>
                    <Box marginTop="0px">{/* <Showcase/> */}</Box>
                </Box>
            </Box>
        </Layout>
        // <Layout>
        //   <div>
        //     <div>users:</div>
        //     <ul>
        //       {data.users.map(x => {
        //         return (
        //           <li key={x.id}>
        //             {x.email}, {x.id}
        //           </li>
        //         );
        //       })}
        //     </ul>
        //   </div>
        // </Layout>
    );
};

export default Index;
