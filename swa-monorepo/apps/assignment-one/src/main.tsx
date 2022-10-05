import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./packages/context/context";
import { Get } from "./pages/get/get";
import { Post } from "./pages/post/post";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IconContext.Provider
      value={{ color: "var(--white-100)", style: { verticalAlign: "middle" } }}
    >
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Get />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </IconContext.Provider>
  </React.StrictMode>
);
