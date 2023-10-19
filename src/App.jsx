import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

import Dashboard from "./pages/DashboardPage";
import Login from "./pages/LoginPage";
// import { useEffect } from 'react'
import ProtectedRoute from "./protected/protected.route";
import AuthRoute from "./protected/auth.route";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        {routes.map((item) => {
          return item?.protected ? (
            <Route
              path={item.path}
              element={<ProtectedRoute children={item.component} />}
            />
          ) : item?.protected === false ? (
            <Route
              path={item.path}
              element={<AuthRoute children={item.component} />}
            />
          ) : (
            <Route path={item.path} element={item.component} />
          );
        })}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
