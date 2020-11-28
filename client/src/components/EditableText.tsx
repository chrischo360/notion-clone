import { gql, useMutation } from "@apollo/client";
import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";

const UPDATECONTENT = gql`
  mutation UpdatePage($id: Int!, $input: PageUpdateInput!) {
    updatePage(id: $id, input: $input)
  }
`;

type EditableTextProps = {
  content: string;
  id: string;
};

const EditableText: React.FC<EditableTextProps> = ({ content, id }) => {
  const text = useRef(content);
  const [updatePage] = useMutation(UPDATECONTENT);
  const handleChange = (evt: any) => {
    text.current = evt.target.value;
    console.log(text.current);
    updatePage({
      variables: {
        input: { content: text.current },
        id: parseInt(id),
      },
    });
  };

  const handleBlur = () => {
    // console.log(text.current);
  };

  const handleFocus = () => {
    // console.log(text.current);
  };

  return (
    <ContentEditable
      html={text.current}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChange={handleChange}
      style={{ outline: "none" }}
    />
  );
};

export default EditableText;
