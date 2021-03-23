import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { Pagelayout } from "../../components/Pagelayout";
import { Sidebar } from "../../components/Sidebar";
import { useGetMeQuery } from "../../generated/graphql";
import { Frame } from "../../components/Frame";
import { FrameHeader } from "../../components/Frameheader";
import { FrameScroller } from "../../components/Framescroller";
import { FramePageInformation } from "../../components/FramePageInformation";
import Link from "next/link";
import { NextPage } from "next";

interface PageProps {}

const Page: NextPage = () => {
    const { data, loading } = useGetMeQuery({ fetchPolicy: "network-only" });
    const router = useRouter();
    const { page } = router.query;
    console.log("Page Url Changed:", page);
    const userId = data?.me?.id;
    const email = data?.me?.email;

    if (loading) {
        return <Layout>Loading..</Layout>;
    }
    if (userId == null) {
        return (
            <Link href="/login">
                <Heading display="flex" justifyContent="center">
                    User Not Found. Sending back to Login. Click Here to Get
                    Back to Homepage
                </Heading>
            </Link>
        );
    }

    return (
        <Layout>
            <Pagelayout>
                <Sidebar email={email} userId={userId} />
                <Box>
                    <Frame>
                        <FrameHeader />
                        <FramePageInformation pageUrl={page} />
                        <FrameScroller />
                    </Frame>
                </Box>
            </Pagelayout>
        </Layout>
    );
};

export default Page;
