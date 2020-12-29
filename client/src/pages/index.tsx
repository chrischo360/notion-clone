import {
    Box,
    Divider,
    Button,
    Link,
    Image,
    Heading,
    Input,
} from "@chakra-ui/core";
import NextLink from "next/link";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { initializeApollo } from "../lib/apolloClient";
import { SiNotion } from "react-icons/si";
import NavBarLinks from "../components/NavBarLinks";
import { Example, RadioCard } from "../components/radio";
import NotionHeader from "../components/header";

const IndexPage: React.FC = () => {
    return (
        <Box minW="100%" minH="100vh">
            <NotionHeader />
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box size="500px" marginTop="50px">
                    <Image
                        marginBottom="0px"
                        src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/product/hero.png"
                        objectFit="cover"
                    ></Image>
                    <Heading size="2xl" fontSize="50px" marginTop="0px">
                        All-in-one workspace
                    </Heading>
                    <Heading size="lg" fontSize="20px" marginTop="0px">
                        One tool for your whole team. Write, plan, and get
                        organized
                    </Heading>
                    <Box margin="10px" display="flex">
                        <Box size="lg">
                            <Input
                                fontSize="20px"
                                placeholder="enter your email"
                            />
                        </Box>
                        <Button>Sign up</Button>
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

export async function getStaticProps() {
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
}

export default IndexPage;
