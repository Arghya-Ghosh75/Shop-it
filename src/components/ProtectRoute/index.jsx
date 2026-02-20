import { Navigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useLogin();

  // ❌ Not logged in → go to login
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  // ✅ Logged in → allow access
  return children;
};

export default ProtectedRoute;
