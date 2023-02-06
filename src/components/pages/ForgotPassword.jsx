import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../server/AuthContext';
import forgotImg from "../../assets/images/user/forgotImg.svg"

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const { resetPassword } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await resetPassword(email);
            setMessage("Check you email for instructions!");
        } catch (e) {
            setMessage(e.message);
            console.log(e.code);
        }
    };

    return (
        <div className="bg-fourth">
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:p-10 mt-20">

                <div className="hidden lg:flex flex-col justify-center items-center gap-7 flex-1 px-20">
                    <p className="text-[2rem] md:text-[2.5rem] font-bold leading-tight">Don't worry!</p>
                    <p className="">Everyone forgets something in this busy world.</p>
                    <div className="flex-1 w-2/3">
                        <img alt="heroImage" src={forgotImg} />
                    </div>
                </div>

                <div className="flex flex-col gap-7 w-full lg:w-1/3 bg-[#ffffff] shadow-lg rounded-lg p-10">

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="font-bold text-2xl">Forgot Password?</p>
                        <p className="text-sm text-center">It's easy to reset it! </p>
                    </div>

                    <form className="flex flex-col text-base" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 font-medium">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-fourth rounded-sm block w-full p-2.5 py-3" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        {message
                            ?
                            <div className="mb-6">
                                <p className={`border-2 rounded-md px-5 py-5 text-center ${message === "Check you email for instructions!" ? `border-[#198000] bg-[#198000]/40` : `border-[#ff3131] bg-[#ff3131]/40`}`}>{message}</p>
                            </div>
                            :
                            <button type="submit" className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Reset Password</button>
                        }

                    </form>

                    <div className="flex gap-2 justify-center items-center">
                        <Link to="/login" className="text-sm underline">Login Instead?</Link>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <p className="font-bold text-lg">New to our app?</p>
                        <Link to="/register" className="text-sm underline">Create an Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword