import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import { useLogoutMutation } from "../generated/graphql";

const Logout = async () => {
    // const [logout] = useLogoutMutation();
    const router = useRouter();
    // await logout();
    // const response = logout();
    // if (response) {
    router.push("/");
    // }
    return <Layout>Thank You For Using Notion</Layout>;
};

export default Logout;
