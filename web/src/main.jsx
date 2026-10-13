import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import NotesContextProvider from "./context/NotesContext.jsx";

createRoot(document.getElementById("root")).render(
  <NotesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NotesContextProvider>,
);
