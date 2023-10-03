import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../Services/userServices";

const ProtectedRouting = () => {
  return getUser() ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRouting;
