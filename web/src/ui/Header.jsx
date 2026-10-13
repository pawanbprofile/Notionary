import React from "react";
import "../../src/index.css";
import { LuSearch } from "react-icons/lu";
import SearchBar from "./SearchBar";
import UserName from "./UserName";
import Notification from "./Notification";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="flex w-full px-4 py-2 justify-between items-center shadow-sm rounded-md shadow-gray-200"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="flex items-center ">
        <span
          className="font-bold text-5xl "
          style={{ color: "var(--color-danger)" }}
        >
          Notion
        </span>
        <span
          className="font-bold text-5xl "
          style={{ color: "var(--color-black)" }}
        >
          ary
        </span>
      </div>
      <div className="flex items-center gap-4 mx-4">
        <div
          className="flex items-center justify-center px-4 py-2 rounded-md new-note-button"
          
        >
          <Link to="/add-new-note">+ New Note</Link>
        </div>
        <SearchBar />
        <Notification hasNotification={true} />
        <UserName name="John Doe" />
      </div>
    </div>
  );
}

export default Header;
