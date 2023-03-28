import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./css/navb.css";
import "./css/home.css";
import "./css/works.css";

import Navb from "./layouts/Navb";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navb />}>
      <Route index element={<Home />} />
      <Route path="works" element={<Works />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
