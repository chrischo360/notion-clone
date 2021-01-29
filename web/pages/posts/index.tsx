import React from "react";
import {
    useGetPageQuery,
    useGetViewerQuery,
    useGetMeQuery,
} from "../../src/generated/graphql";

const IndexPage = () => {
    // // const { data, loading, error } = useGetPageQuery({
    //     variables: {
    //         pageId: 6,
    //     // },
    // // });
    // const { data } = useGetViewerQuery();
    const { data } = useGetMeQuery();
    console.log(data);

    return (
        <div>data</div>
        // <div>
        //     {data.page.title}
        //     {data?.page?.cover}
        // </div>
    );
};

export default IndexPage;
