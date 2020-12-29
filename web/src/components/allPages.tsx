import { gql, useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";

const GET_ALL_PAGES = gql`
    query getAllPages {
        getAllPages {
            id
            cover
            title
            emoji
            blocks {
                id
                content
                type
                boldness
                order
                pageLink
                checked
                indentationLevel
            }
        }
    }
`;

const PagesList: React.FC = () => {
    const { data, loading, error } = useQuery(GET_ALL_PAGES);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <Box>
            {data.getAllPages.map((page) => (
                <div>
                    <div>{page.title}</div>
                    <div>{page.cover}</div>
                    <div>{page.emoji}</div>
                    <div>{page.cover}</div>
                    <div>blocks:{page.blocks}</div>
                </div>
            ))}
        </Box>
    );
};

export default PagesList;
