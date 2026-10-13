import React from "react";
import { LuTrash2, LuPencil } from "react-icons/lu";
import "../../src/App.css";
function Note({ title, description, created_at, updated_at }) {
  return (
    <div className="max-w-full  mt-2 rounded-xl px-4 py-4 gap-4 note flex-col items-start transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-200">
      <div className="flex justify-between items-center gap-8">
        <span className="text-lg font-medium flex-1 note-title">{title}</span>
        <button
          className=" note-edit-delete font-bold py-2 px-2 rounded  shadow-[0_2px_5px_rgba(0,0,0,0.1)]
             hover:shadow-[0_3px_7px_rgba(0,0,0,0.4)]
             hover:-translate-0.5
             active:scale-90
             active:translate-y-0
             active:shadow-sm
             transition-shadow duration-300"
        >
          <LuTrash2 className="text-xl min-w-3 note-delete" />
        </button>
        <button
          className=" note-edit-delete font-bold py-2 px-2 rounded  shadow-[0_2px_5px_rgba(0,0,0,0.1)]
             hover:shadow-[0_3px_7px_rgba(0,0,0,0.4)]
             hover:-translate-0.5
             active:scale-90
             active:translate-y-0
             active:shadow-sm
             transition-shadow duration-300"
        >
          <LuPencil className="text-xl  min-w-3 note-edit" />
        </button>
      </div>

      <span className="text-gray-600 note-description">{description}</span>
      <div className="flex justify-between w-full items-center">
        <span className="text-gray-600 note-time">{created_at}</span>
        <span className="text-gray-600 note-time">{updated_at}</span>
      </div>
    </div>
  );
}

export default Note;
