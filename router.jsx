import { Outlet, createBrowserRouter, useNavigation } from "react-router-dom";
import { ErrorPage } from "./src/Pages/404/ErrorPage";
import { Navbar } from "./src/components/Navbar/Navbar";
import { Footer } from "./src/components/Footer/Footer";
import { ToastContainer } from "react-toastify";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <h2>Home</h2> },
      {
        path: "/unknown",
        children: [
          { index: true, element: <h2>Unknown element</h2> },
          { path: "update/:id", element: <h2>Unknown Update</h2> },
          { path: "edit/:id", element: <h2>Unknown Edit</h2> },
          { path: "delete/:id", element: <h2>Unknown Delete</h2> },
        ],
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
