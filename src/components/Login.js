import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'

export const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef (null);

    const handleButtonClick = ()=>{
        const message = checkValidData(email.current.value,  password.current.value)
        setErrorMessage(message)

    }

    const toggleSignupForm = () => {
        setIsSignInForm(!isSignInForm)
    };

    return (
        <div>
            <Header />
            <div className='absolute'>

                <img alt='backgroundImg' src='https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_medium.jpg'>
                </img>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute  p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
                <h1 className='font-bold text-xl p-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&(<input  ref={name}type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700 '>
                </input>)}
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700'>
                </input>
                <input ref={password} type='password' placeholder='password' className='p-4 my-2 w-full bg-gray-700'>
                </input>
                <p className='text-red-700'>{errorMessage}</p>
                <button onClick={handleButtonClick} className='p-4 my-2 bg-red-700 w-full rounded-lg'>{isSignInForm ? " Sign In" : "sign Up"}

                </button>
                <p className='p2 my-2 cursor-pointer' onClick={toggleSignupForm}>{isSignInForm ? "New to Netflix Sign up Now" : "Allready register? Sign in Now" } </p>
            </form>
        </div>
    )
}
