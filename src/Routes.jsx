import { Navigate, useRoutes } from "react-router-dom";
import Login from "./components/auth/Login";
import Singup from "./components/auth/Singup";
import Profile from "./components/user/Profile";
import Dashboard from "./components/dashboard/Dashboard";

const ProjectRoutes = () => {
    const routes = [
        { path: "/", element: <Navigate to="/login" replace /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Singup /> },
        { path: "/profile", element: <Profile /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "*", element: <Navigate to="/login" replace /> },
    ];

    return useRoutes(routes);
};

export default ProjectRoutes;
