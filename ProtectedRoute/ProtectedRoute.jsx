import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
export function ProtectedRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    toast.error("You must login first!");
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
  return children;
}
