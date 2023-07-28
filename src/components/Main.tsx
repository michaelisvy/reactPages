import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "../styles/Main.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { SessionList, SessionDetail, ErrorPage, Facilitating } from "./index.ts";
import { ClimateFresk } from "./index.ts";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <SessionList />,
      },{
        path: "reactPages/sessions",
        element: <SessionList />,
      },
      {
        path: "reactPages/sessions/:sessionId",
        element: <SessionDetail />,
      },

      {
        path: "reactPages/climateFresk",
        element: <ClimateFresk />,
      },
      {
        path: "reactPages/facilitating",
        element: <Facilitating />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div id="mainContainer">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
