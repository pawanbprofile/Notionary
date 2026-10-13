import React from "react";

export const NotesContext = React.createContext();

function NotesContextProvider({ children }) {
  const [notes, setNotes] = React.useState([
    {
      id: 1,
      title: "My First Note",
      description: "This is the description of my first note.",
      created_at: "2023-01-01 12:00:00",
      updated_at: "2023-01-01 12:00:00",
    },
    {
      id: 2,
      title: "React Fundamentals",
      description: "Learn about components, props, state, and hooks in React.",
      created_at: "2023-01-02 09:30:00",
      updated_at: "2023-01-03 14:15:00",
    },
    {
      id: 3,
      title: "FastAPI Notes",
      description:
        "Understand routes, dependencies, middleware, and Pydantic models.",
      created_at: "2023-01-04 10:00:00",
      updated_at: "2023-01-04 10:00:00",
    },
    {
      id: 4,
      title: "Project Ideas",
      description:
        "Ideas for building full-stack applications using React and FastAPI.",
      created_at: "2023-01-05 11:45:00",
      updated_at: "2023-01-06 16:20:00",
    },
    {
      id: 5,
      title: "Daily Journal",
      description:
        "Reflect on today's achievements, challenges, and lessons learned.",
      created_at: "2023-01-07 08:00:00",
      updated_at: "2023-01-07 08:00:00",
    },
    {
      id: 6,
      title: "Meeting Notes",
      description:
        "Discuss project progress, pending tasks, deadlines, and next steps.",
      created_at: "2023-01-08 13:00:00",
      updated_at: "2023-01-08 15:30:00",
    },
    {
      id: 7,
      title: "Learning Goals",
      description:
        "Master React, TypeScript, backend development, and database design.",
      created_at: "2023-01-09 07:30:00",
      updated_at: "2023-01-10 09:00:00",
    },
    {
      id: 8,
      title: "Shopping List",
      description: "Notebook, pens, groceries, and other essential items.",
      created_at: "2023-01-11 12:15:00",
      updated_at: "2023-01-11 12:15:00",
    },
    {
      id: 9,
      title: "Important Reminders",
      description:
        "Complete pending assignments and review the weekly schedule.",
      created_at: "2023-01-12 14:00:00",
      updated_at: "2023-01-13 10:30:00",
    },
    {
      id: 10,
      title: "Book Recommendations",
      description:
        "A collection of books to read on programming, productivity, and personal growth.",
      created_at: "2023-01-14 16:45:00",
      updated_at: "2023-01-14 16:45:00",
    },
  ]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note,
      ),
    );
  };
  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesContextProvider;
