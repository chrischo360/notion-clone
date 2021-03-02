import { Box } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";
import { createEditor, Transforms, Editor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withMyPlugin } from "./withMyPlugin";

export const EditorComponent = () => {
    const editor = useMemo(() => withReact(withMyPlugin(createEditor())), []);
    const [value, setValue] = useState<Node[]>([
        {
            children: [{ text: "Testing" }],
        },
    ]);

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
            <Slate
                editor={editor}
                value={value}
                onChange={(newValue) => setValue(newValue)}
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
