import React from "react";
import Header from "../ui/Header";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import { useNavigate } from "react-router-dom";
function AddNewNote() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const form = new FormData(e.target);
    console.log("Form Data:", Object.fromEntries(form.entries()));
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
          <h2 className="text-2xl font-bold">Add New Note</h2>
          <Input
            title="Title :"
            id="title"
            name="title"
            placeholder="Enter note title"
            type="text"
          />
          <TextArea
            title="Description :"
            id="description"
            name="description"
            placeholder="Enter note description"
            type="text"
          />
          <button
            type="submit"
            className="px-4 py-2  rounded-md  focus:outline-none submit-btn hover:opacity-80  transition-all duration-300 active:scale-95 active:translate-0.5"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewNote;
