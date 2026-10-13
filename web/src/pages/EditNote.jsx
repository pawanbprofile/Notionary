import React from "react";
import Header from "../ui/Header";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import { useLocation } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import { useNavigate } from "react-router-dom";
function EditNote() {
  const { state } = useLocation();
  const note = state?.note || { title: "", description: "" };
  const [title, setTitle] = React.useState(note.title);
  const [description, setDescription] = React.useState(note.description);
  const { updateNote } = React.useContext(NotesContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote({
      ...note,
      title,
      description,
      updated_at: new Date().toISOString(),
    });
    navigate("/", { replace: true });
  };
  return (
    <div className="max-w-full flex items-center flex-col justify-start">
      <Header />
      <div className="min-w-[320px] max-w-180  h-screen justify-center flex flex-col p-4 items-center rounded-b-md gap-4 ">
        <form
          className="max-w-150 min-w-[320px]  flex flex-col gap-4 items-center shadow-md p-4 rounded-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold">Update Note</h2>
          <Input
            title="Title :"
            id="title"
            name="title"
            placeholder="Enter note title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            title="Description :"
            id="description"
            name="description"
            placeholder="Enter note description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2  rounded-md  focus:outline-none submit-btn hover:opacity-80  transition-all duration-300 active:scale-95 active:translate-0.5"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditNote;
