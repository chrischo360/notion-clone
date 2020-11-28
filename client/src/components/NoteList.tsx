import { gql, useQuery } from "@apollo/client";
import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";
import Note from "./Note";

export const NOTES = gql`
  query AllNotes {
    notes {
      id
      createdAt
      updatedAt
      content
    }
  }
`;

const NoteList = () => {
  const { loading, error, data } = useQuery(NOTES, {
    errorPolicy: "all",
  });

  if (error) return <ErrorMessage />;
  if (loading) return <LoadingMessage />;

  const { notes } = data;

  return (
    <section>
      <ul>
        {notes.map((note, index) => (
          <Note key={note.id} content={note.content} />
        ))}
      </ul>
    </section>
  );
};

export default NoteList;
