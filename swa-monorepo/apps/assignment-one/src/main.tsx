import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./packages/context/context";
import { App } from "./pages/app/app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IconContext.Provider
      value={{ color: "var(--white-100)", style: { verticalAlign: "middle" } }}
    >
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/post" />
          </Routes>
        </BrowserRouter>
      </Context>
    </IconContext.Provider>
  </React.StrictMode>
);
