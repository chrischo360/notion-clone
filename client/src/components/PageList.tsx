import { gql, useQuery } from "@apollo/client";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";
import Page from "./Page";

const PAGES = gql`
  {
    pages {
      id
      content
      cover
      title
      emoji
    }
  }
`;

type PageProps = {
  id: string;
  content: string;
  cover: string;
  title: string;
  emoji: string;
};

const PageList = () => {
  const { loading, error, data } = useQuery(PAGES);

  if (loading) return <LoadingMessage />;
  if (error) return <ErrorMessage />;

  const { pages } = data;

  return (
    <div>
      {pages.map((page: PageProps, index: number) => (
        <Page
          key={index}
          cover={page.cover}
          title={page.title}
          emoji={page.emoji}
          content={page.content}
          id={page.id}
        />
      ))}
    </div>
  );
};

export default PageList;
