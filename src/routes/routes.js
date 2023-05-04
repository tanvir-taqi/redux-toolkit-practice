import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Home></Home>
    },
    {
        path: '/addbook',
        element:<AddBook></AddBook>
    },
])