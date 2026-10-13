import React from "react";
import "../src/index.css";
import "../src/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNewNote from "./pages/AddNewNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-new-note" element={<AddNewNote />} />
      <Route path="/edit-note" element={<EditNote />} />
    </Routes>
  );
}

export default App;
