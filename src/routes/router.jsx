import { createBrowserRouter } from "react-router"
import HomeLayout from "../layouts/HomeLayout/HomeLayout"
import Home from "../pages/Home"


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
                path:"/categories/:id"
            }
        ]
    }
])