import { createBrowserRouter } from "react-router-dom"
import Homepage from "../components/Homepage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    }
])