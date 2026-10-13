import React, { useContext } from "react";
import Header from "../ui/Header";
import Note from "../ui/Note";
import { NotesContext } from "../context/NotesContext";
function Home() {
  const { notes } = useContext(NotesContext);

  return (
    <div className="max-w-full flex-col items-start">
      <Header />
      <div className="max-w-full flex-col gap-2 items-center">
        {notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            description={note.description}
            created_at={note.created_at}
            updated_at={note.updated_at}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
