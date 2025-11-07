import React from "react"
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import Browes from "./Browes";

import { RouterProvider } from "react-router-dom";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browes",
            element: <Browes />
        }
    ]);
    return (
        <div>
            <RouterProvider router={appRouter}>
            </RouterProvider>
        </div>

    )
};

export default Body;