import {
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  Editor,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import React from "react";

interface MyEditorProps {}

class MyEditor extends React.Component<MyEditorProps, any> {
  onChange: (editorState: any) => void;
  constructor(props: MyEditorProps) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(initialData)),
    };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command: any, editorState: any) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
      />
    );
  }
}

const initialData = {
  blocks: [
    {
      key: "16d0k",
      text: "You can edit this text.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 23, style: "BOLD" }],
      entityRanges: [],
      data: {},
    },
    {
      key: "98peq",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "ecmnc",
      text:
        "Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        { offset: 0, length: 14, style: "BOLD" },
        { offset: 133, length: 9, style: "BOLD" },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "fe2gn",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "4481k",
      text:
        "With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        { offset: 34, length: 19, style: "BOLD" },
        { offset: 117, length: 4, style: "BOLD" },
        { offset: 68, length: 10, style: "ANYCUSTOMSTYLE" },
      ],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

export default MyEditor;
