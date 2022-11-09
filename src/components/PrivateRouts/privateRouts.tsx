import { Navigate } from "react-router-dom";

const PrivateRouts = ({ children }: any) => {
  const isAuth = localStorage.getItem("userToken");
  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRouts;
