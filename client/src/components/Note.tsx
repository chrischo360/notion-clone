import { Box } from "@chakra-ui/core";

type NoteProps = {
  key: string;
  content: string;
};

const Note: React.FC<NoteProps> = ({ key, content }) => {
  return (
    <Box>
      <li key={key}>
        <Box>{content}</Box>
      </li>
    </Box>
  );
};

export default Note;
