import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUser } from "../Services/userServices";

const ProtectedRouting = () => {
  const location = useLocation();
  //   console.log(location);
  return getUser() ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{
        from: location.pathname,
      }}
    />
  );
};
export default ProtectedRouting;
