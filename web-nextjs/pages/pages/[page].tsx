import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import {Pagelayout} from "../../components/Pagelayout";
import {Sidebar} from "../../components/Sidebar";
import { useGetMeQuery } from "../../generated/graphql";

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
    const { data } = useGetMeQuery({fetchPolicy: 'network-only'});
    const router = useRouter();
    const { page } = router.query;
    console.log(page)
    return (
        <Layout>
            <Pagelayout>
            <Sidebar email={data?.me?.email} />
            <Box>
                <Box>{page}</Box>
            </Box>
        </Pagelayout>
        </Layout>
    );
};

export default Page;
