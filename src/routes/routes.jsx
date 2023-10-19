import DashboardPage from "../pages/DashboardPage";
import Login from "../pages/LoginPage";
import NoContentPage from "../pages/NoContentPage";
import ForgetPassword from "../pages/ForgetPasswordPage";
import ResetPassword from "../pages/ResetPasswordPage";
import Users from "../pages/user/user";
import Transacrions from "../pages/transactions/transactions";
import Plans from "../pages/plan/Plans";
import ChangePasswordPage from "../pages/password/ChangePasswordPage";

export const routes = [
  {
    path: "/dashboard",
    component: <DashboardPage />,
    protected: true,
  },
  {
    path: "/login",
    component: <Login />,
    protected: false,
  },
  {
    path: "/forget-password",
    component: <ForgetPassword />,
    protected: false,
  },
  {
    path: "/reset-password",
    component: <ResetPassword />,
    protected: false,
  },
  {
    path: "/users",
    component: <Users />,
    protected: true,
  },
  {
    path: "/transactions",
    component: <Transacrions />,
    protected: true,
  },
  {
    path: "/plans",
    component: <Plans />,
    protected: true,
  },
  {
    path: "/change-password",
    component: <ChangePasswordPage />,
    protected: true,
  },
  {
    path: "*",
    component: <NoContentPage />,
  },
];
