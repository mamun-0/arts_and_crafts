import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
export function AlreadyLogin({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
