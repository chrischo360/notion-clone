import { Box, Button, Image, Heading, Input } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { initializeApollo } from "../src/lib/apolloClient";
import { SiNotion } from "react-icons/si";
import NavBarLinks from "../src/components/NavBarLinks";
import { Example, RadioCard } from "../src/components/radio";
import NotionHeader from "../src/components/header";
import { GetStaticProps } from "next";

const IndexPage: React.FC = () => {
    return (
        <Box minW="100%" minH="100vh">
            <NotionHeader />
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
                <Box marginTop="0px">
                    <Example />
                </Box>
            </Box>
        </Box>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const apolloClient = initializeApollo();

    // await apolloClient.query({
    //   query: GET_PAGE_QUERY,
    // });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
        revalidate: 1,
    };
};

// export async function getStaticProps() {
//     const apolloClient = initializeApollo();

//     // await apolloClient.query({
//     //   query: GET_PAGE_QUERY,
//     // });

//     return {
//         props: {
//             initialApolloState: apolloClient.cache.extract(),
//         },
//         revalidate: 1,
//     };
// }

export default IndexPage;
