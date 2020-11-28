import React, { useState } from "react";
import EditableText from "./EditableText";
import EditableTitle from "./EditableTitle";
import { Box, Flex, Image } from "@chakra-ui/core";
import Emoji from "./Emoji";

type PageProps = {
  cover: string;
  title: string;
  emoji: string;
  content: string;
  id: string;
};

const Page: React.FC<PageProps> = ({ cover, title, emoji, content, id }) => {
  const [clicked, setClicked] = useState(false);

  const handleBlur = () => {
    console.log("out of blur");
  };

  const handleClick = () => {
    console.log("clicked");
    setClicked(true);
  };

  const NewEditableText = ({ click }: any) => {
    if (click) {
      return <EditableText content={""} id="100" />;
    } else {
      return null;
    }
  };

  return (
    <Box h="100vh">
      <Flex
        direction="column"
        w="100%"
        h="100vh"
        align="center"
        alignItems="center"
        onBlur={handleBlur}
      >
        <Box>
          <Image src={cover} />
        </Box>
        <Box w="80%" alignSelf="auto">
          <Emoji symbol={emoji} label={emoji} />
        </Box>
        <Box w="80%">
          <EditableTitle placeholder={title} id={id} />
        </Box>
        <Box w="80%">
          <EditableText content={content} id={id} />
        </Box>
        <Box h="100vh" onClick={handleClick} style={{ opacity: "0" }}>
          Test
          <NewEditableText click={clicked} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Page;
