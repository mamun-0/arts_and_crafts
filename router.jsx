import { Outlet, createBrowserRouter, useNavigation } from "react-router-dom";
import { ErrorPage } from "./src/Pages/404/ErrorPage";
import { Navbar } from "./src/components/Navbar/Navbar";
import { Footer } from "./src/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Login } from "./src/Pages/Login/Login";
import { Register } from "./src/Pages/Register/Register";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Home } from "./src/Pages/Home/Home";
import { AlreadyLogin } from "./ProtectedRoute/AlreadyLogin";
import { AddCraft } from "./src/Pages/AddCraft/AddCraft";
import AllArtsCrafts from "./src/Pages/AllArtsCrafts/AllArtsCrafts";
import { MyArtAndCraft } from "./src/Pages/MyArtAndCraft/MyArtAndCraft";
import { UpdateForm } from "./src/components/UpdateForm/UpdateForm";
import { Details } from "./src/Pages/Details/Details";
import { useContext } from "react";
import { DarkModeContext } from "./DarkMode/DarkMode";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: (
          <AlreadyLogin>
            <Login />
          </AlreadyLogin>
        ),
      },
      {
        path: "/register",
        element: (
          <AlreadyLogin>
            <Register />
          </AlreadyLogin>
        ),
      },
      {
        path: "/add-craft-item",
        element: (
          <ProtectedRoute>
            <AddCraft />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-art-craft-list",
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <MyArtAndCraft />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id",
            element: (
              <ProtectedRoute>
                <UpdateForm />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/all-art-craft",
        children: [
          { index: true, element: <AllArtsCrafts /> },
          {
            path: ":id",
            element: (
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);

function NavLayout() {
  const { state } = useNavigation();
  const { isDark } = useContext(DarkModeContext);
  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar />
      {state === "loading" ? (
        "Loading"
      ) : (
        <div style={{ minHeight: "80vh" }}>{<Outlet />}</div>
      )}
      <ToastContainer autoClose={1000} />
      <Footer />
    </div>
  );
}
