import React from "react";
import axios from "axios";
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

import PageTransition from "./layouts/PageTransition";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/portfolio_main" element={<Navb />} errorElement={<Error />}>
      <Route
        index
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        }
      />
      <Route
        path="works"
        element={
          <PageTransition>
            <Works />
          </PageTransition>
        }
      />
      <Route
        path="contact"
        element={
          <PageTransition>
            <Contact />
          </PageTransition>
        }
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);
