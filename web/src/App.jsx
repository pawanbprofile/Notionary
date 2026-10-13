import React from "react";
import "../src/index.css";
import "../src/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNewNote from "./pages/AddNewNote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-new-note" element={<AddNewNote />} />
    </Routes>
  );
}

export default App;
