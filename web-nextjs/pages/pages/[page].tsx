import { Box } from "@chakra-ui/react";
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
import Head from "next/head";

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
    const { data, loading } = useGetMeQuery({ fetchPolicy: "network-only" });
    const router = useRouter();
    const { page } = router.query;
    const email = data?.me?.email;
    const userId = data?.me.id;

    // if (userId == null) {
    //     router.push("/login");
    // }

    console.log("typeofUserid:", typeof userId);
    if (loading) {
        return <Box>Loading...</Box>;
    }

    if (data?.me?.email == null) {
        router.push("/login");
    }
    return (
        <Layout>
            <Pagelayout>
                <Sidebar email={email} userId={userId} />
                <Box>
                    {/* <Box>
                        <Box>{page}</Box>
                    </Box> */}
                    <Frame>
                        <FrameHeader />
                        <FramePageInformation pageUrl={page} />
                        <FrameScroller />
                    </Frame>
                    {/* <CreatePageForm /> */}
                </Box>
            </Pagelayout>
        </Layout>
    );
};

export default Page;
