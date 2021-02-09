import React, { useEffect, useState } from "react";
import {
    useGetMeQuery,
} from "../../src/generated/graphql";
import {accessToken, setAccessToken} from "../../src/lib/accessToken"

const IndexPage = () => {
    // // const { data, loading, error } = useGetPageQuery({
    //     variables: {
    //         pageId: 6,
    //     // },
    // // });
    // const { data } = useGetViewerQuery();
    const { data } = useGetMeQuery({fetchPolicy: 'network-only'});

    useEffect(() => {
          fetch("http://localhost:4000/refresh_token", {
            method: "POST",
            credentials: "include"
          }).then(async x => {
            const { accessToken } = await x.json();
            console.log("JSON:", x)
            setAccessToken(accessToken);
            console.log("ACCESS TOKEN IN PAGES/INDEX:", accessToken)
          });
        }, []);

    console.log(data?.me?.name)

    return (
        <div>
        <div>{data?.me?.email}</div>
        <div>{accessToken}</div>
        </div>
        // <div>
        //     {data.page.title}
        //     {data?.page?.cover}
        // </div>
    );
};

export default IndexPage;
