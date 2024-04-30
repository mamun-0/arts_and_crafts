import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { AuthProvider } from "../AuthProvider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import { DarkMode } from "../DarkMode/DarkMode";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DarkMode>
      <RouterProvider router={router}></RouterProvider>
    </DarkMode>
  </AuthProvider>
);
