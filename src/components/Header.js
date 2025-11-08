import React from "react"
import { auth } from "../utils/firbase"
import { useNavigate } from "react-router-dom";
import {signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store=> store.user)
    console.log("user",user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
             navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }

    return (
        <div className=" flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44" alt="logo" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
            {user && <div className="flex">
                <img className="w-10 h-10" alt="userIcon" src={user?.photoUrl}></img>
                <button onClick={handleSignOut} className='p-4 my-2 text-white rounded-lg w-70'>Sign out</button>
            </div>}

        </div>
    )

};

export default Header