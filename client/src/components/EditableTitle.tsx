import { gql, useMutation } from "@apollo/client";
import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";

const UPDATETITLE = gql`
  mutation UpdateTitle($id: Int!, $input: PageUpdateInput!) {
    updatePage(id: $id, input: $input)
  }
`;

type EditableTitleProps = {
  placeholder: string;
  id: string;
};

const EditableTitle: React.FC<EditableTitleProps> = ({ placeholder, id }) => {
  const text = useRef(placeholder);
  const [updatePage] = useMutation(UPDATETITLE);

  const handleChange = (evt: any) => {
    text.current = evt.target.value;
    updatePage({
      variables: {
        input: { title: text.current },
        id: parseInt(id),
      },
    });
  };

  const handleBlur = () => {
    console.log(text.current);
  };

  const handleFocus = () => {
    console.log(text.current);
  };

  return (
    <ContentEditable
      html={text.current}
      onBlur={handleBlur}
      onChange={handleChange}
      style={{ outline: "none", fontSize: "30px", fontWeight: "700" }}
    />
  );
};

export default EditableTitle;
