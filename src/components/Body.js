import React, { useEffect } from "react"
import { createBrowserRouter,  } from "react-router-dom";
import { Login } from "./Login";
import Browes from "./Browes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firbase"

import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browes",
            element: <Browes />,
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                const {uid ,email, displayName,photoUrl} = user;
                
                dispatch(addUser({uid:uid,email:email,displayName:displayName, photoUrl:photoUrl}))
                

            } else {
               dispatch(removeUser())
                
            }
        });

    }, [])
    return (
        <div>
            <RouterProvider router={appRouter}>
            </RouterProvider>
        </div>

    )
};

export default Body;