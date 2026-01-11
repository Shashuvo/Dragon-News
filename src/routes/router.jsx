import { createBrowserRouter } from "react-router"
import HomeLayout from "../layouts/HomeLayout/HomeLayout"
import Home from "../pages/Home"
import CategoryNews from "../pages/CategoryNews"
import AuthLayout from "../layouts/AuthLayout/AuthLayout"
import Login from "../pages/AuthPages/Login"
import Register from "../pages/AuthPages/Register"


export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/categories/:id",
                Component: CategoryNews,
                loader: () => fetch("/news.json")
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register
            }
        ]
    },
    {
        path: "/about",
        element: <h1>About</h1>
    },
    {
        path: "/career",
        element: <h1>Career</h1>
    },
    {
        path: "/*",
        element: <h1>Erro404</h1>
    }
]);