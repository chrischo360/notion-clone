import React from "react";
import { useGetPageQuery } from "../../src/generated/graphql";

const IndexPage = () => {
    const { data, loading, error } = useGetPageQuery({
        variables: {
            pageId: 6,
        },
    });
    return (
        <div>
            {data.page.title}
            {data?.page?.cover}
        </div>
    );
};

export default IndexPage;
