import { Box, Editable } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
import { createEditor, Editor, Node } from "slate";
import { withReact, Slate } from "slate-react";
import { useUpdatePageTitleMutation } from "../generated/graphql";
import { withMyPlugin } from "./withMyPlugin";

interface PageTitleProps {
    title: string | undefined;
    pageId: string | undefined;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, pageId }) => {
    const [updatePage] = useUpdatePageTitleMutation();
    const [pageTitle, setpageTitle] = useState(title);
    console.log(pageTitle);

    const [value, setValue] = useState<Node[]>(initialValue);
    const editor = useMemo(() => withReact(withMyPlugin(createEditor())), []);

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={(value) => setValue(value)}
        >
            <Editable placeholder="Enter some plain text..." />
        </Slate>
    );
};
// return (
//     <Box>
//         <Slate
//             editor={editor}
//             value={value}
//             onChange={(newValue) => {
//                 setValue(newValue);
//                 const content = JSON.stringify(value);
//                 updatePage({
//                     variables: {
//                         pageId: pageId,
//                         title: content,
//                     },
//                 });
//             }}
//         >
//             <Editable
//                 renderElement={renderElement}
//                 onKeyDown={(e) => {
//                     // let's make the current text bold if the user holds command and hits "b"
//                     if (e.metaKey && e.key === "b") {
//                         e.preventDefault();
//                         Editor.addMark(editor, "bold", true);
//                     }
//                 }}
//             />
//         </Slate>
//     </Box>
// );
// };

const initialValue = [
    {
        children: [
            { text: "This is editable plain text, just like a <textarea>!" },
        ],
    },
];
