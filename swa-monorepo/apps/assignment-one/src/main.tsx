import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { BrowserRouter, Route, Routes, Search } from "react-router-dom";
import App from "./pages/app/app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IconContext.Provider
      value={{ color: "var(--white-100)", style: { verticalAlign: "middle" } }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/post" />
        </Routes>
      </BrowserRouter>
    </IconContext.Provider>
  </React.StrictMode>
);
