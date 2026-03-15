import React from "react";
import {useNavigate,useRoutes } from "react-router-dom";


//pageslist

import Home from "./pages/Home";
import Login from "./pages/Login";
import singup from "./pages/singup";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./authContext";
import { useEffect } from "react";


const ProjectRoutes = () => {
 
    const { currentUser,setcurrentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate]);

    const routes = [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <singup /> },
        { path: "/profile", element: <Profile /> },
        { path: "/register", element: <Register /> },
        { path: "/dashboard", element: <Dashboard /> }
    ];

    return useRoutes(routes);
}
