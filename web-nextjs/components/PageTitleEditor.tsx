import { Box } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";
import { createEditor, Editor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { useUpdatePageMutation } from "../generated/graphql";
import { withMyPlugin } from "./withMyPlugin";

// const NEWPAGE = gql`
//     subscription newPage {
//         newPage {
//             title
//             emoji
//             cover
//             content
//         }
//     }
// `;

export const PageTitleEditor = ({ title, pageId }: any) => {
    // const { data } = usePageSubscriptionSubscription;
    // const { data } = useSubscription(NEWPAGE);

    const [updatePage] = useUpdatePageMutation();
    const editor = useMemo(() => withReact(withMyPlugin(createEditor())), []);

    // const [value, setValue] = useState(data.newPage.content);

    const [value, setValue] = useState(
        // JSON.parse(title) ||
        [
            {
                type: "paragraph",
                children: [{ text: "test" }],
            },
        ]
    );

    const renderElement = useCallback((props) => {
        switch (props.element.type) {
            case "code":
                return <CodeElement {...props} />;
            default:
                return <DefaultElement {...props} />;
        }
    }, []);

    return (
        <Box padding="100px">
            {/* <Box>Updated Data: {data.newPage.content}</Box> */}
            <Slate
                editor={editor}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    // const content = JSON.stringify(value);
                    console.log(newValue.map((n) => Node.string(n)).join("\n"));
                    updatePage({
                        variables: {
                            pageId: pageId,
                            title: newValue
                                .map((n) => Node.string(n))
                                .join("\n"),
                        },
                    });

                    // updatePage({
                    //     variables: {
                    //         pageId: pageId,
                    //         title: content,
                    //     },
                    // });
                }}
            >
                <Editable
                    renderElement={renderElement}
                    onKeyDown={(e) => {
                        // let's make the current text bold if the user holds command and hits "b"
                        if (e.metaKey && e.key === "b") {
                            e.preventDefault();
                            Editor.addMark(editor, "bold", true);
                        }
                    }}
                />
            </Slate>
        </Box>
    );
};

const CodeElement = (props) => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    );
};

const DefaultElement = (props) => {
    return <p {...props.attributes}>{props.children}</p>;
};
