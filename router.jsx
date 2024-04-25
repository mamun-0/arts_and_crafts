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
            <h2>Add Craft Item</h2>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-art-craft-list",
        element: (
          <ProtectedRoute>
            <h2>My Art & Craft List</h2>
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-art-craft",
        element: <h2>All Art & craft Items</h2>,
      },
    ],
  },
]);

function NavLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar />
      {state === "loading" ? (
        "Loading"
      ) : (
        <div style={{ minHeight: "80vh" }}>{<Outlet />}</div>
      )}
      <ToastContainer autoClose={1000} />
      <Footer />
    </>
  );
}
