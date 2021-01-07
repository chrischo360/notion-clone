import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import PageLayout from "../../src/components/pageLayout";
import SideBar from "../../src/components/sideBar";

interface PageProps {}

const sampleBlockData = [
  {
    type: "TEXT",
    content: "sample block test",
  },
  {
    type: "HEADING",
    content: "sample block test 2",
  },
  {
    type: "TEXT",
    content: "sample block test 3",
  },
];

const samplePageData = [
  {
    title: "Sample Page 1",
    emoji: "workout-emoji",
    cover: "sample-cover",
    blocks: sampleBlockData,
  },
  {
    title: "Sample Page 2",
    emoji: "happy-emoji",
    cover: "sample-cover",
    blocks: sampleBlockData,
  },
];

const Page: React.FC<PageProps> = ({}) => {
  const router = useRouter();
  const { page } = router.query;
  return (
    <PageLayout>
      <SideBar user="chrischo360" />
      <Box>
        <Box>{page}</Box>
      </Box>
    </PageLayout>
  );
};

export default Page;
