import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import { useLogoutMutation } from "../generated/graphql";

const Logout = () => {
    // const [logout] = useLogoutMutation();
    const router = useRouter();

    // const response = logout();
    // if (response) {
    router.push("/");
    // }
    return <Layout>Thank You For Using Notion</Layout>;
};

export default Logout;
