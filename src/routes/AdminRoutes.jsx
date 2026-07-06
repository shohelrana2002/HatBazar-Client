import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../shared/Loading";

const AdminRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const { loading } = useAuth();

  if (loading) return <Loading />;

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoutes;
