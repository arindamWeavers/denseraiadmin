import { Navigate } from "react-router-dom";

const AuthRoute = (props) => {
  const children = props.children;
  let user= localStorage.getItem("user");
  if (user !== null) {
    user = JSON.parse(user);
    if (user.role === "admin") {
      return <Navigate to="/dashboard" replace />;
    } else {
      return children;
    }
  } else {
    return children;
  }
};

export default AuthRoute;
