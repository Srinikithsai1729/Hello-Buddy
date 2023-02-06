import { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"
import { RiSettings3Fill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { UserAuth } from "../../server/AuthContext"
import MessageAlert from "../common/MessageAlert";
import ContentTitle from "./ContentTitle"

const AccountSettings = () => {

    const { user, userData, updateEmailAddress, verifyEmail } = UserAuth()

    const [alert, setAlert] = useState({
        box: false,
        name: "",
        message: "",
        type: ""
    })

    const [email, setEmail] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setAlert({
                box: false,
                name: "",
                message: "",
                type: ""
            })
        }, 2000);
    }, [alert.box])

    const handleChange = async (e) => {
        e.preventDefault();
        try {
            await updateEmailAddress(email);
            setAlert({
                box: true,
                name: "Success",
                message: `Your email has been updated to ${email}`,
                type: "success"
            })
        } catch (e) {
            setAlert({
                box: true,
                name: "Error Occured",
                message: e.message,
                type: "fail"
            })
        }
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            await verifyEmail();
            setAlert({
                box: true,
                name: "Verification mail sent",
                message: "Check your mail to confirm your account",
                type: "success"
            })
            console.log("sent");
        } catch (e) {
            setAlert({
                box: true,
                name: "Error Occured",
                message: "Please wait for few seconds",
                type: "fail"
            })
            console.log(e.message)
        }
    }

    return (
        <>
            {user ?
                <div className="flex flex-col gap-5 w-full">

                    {alert.box === true ?
                        <MessageAlert name={alert.name} message={alert.message} type={alert.type} />
                        :
                        <></>
                    }

                    <ContentTitle title="Account Settings" imageIcon={<RiSettings3Fill size={25} />} />

                    <div className="flex flex-col gap-7 w-full bg-[#ffffff] shadow-lg rounded-lg p-10">
                        <form className="flex flex-col gap-2 text-base" onSubmit={handleChange}>
                            <label htmlFor="email" className="text-sm font-semibold">Email</label>
                            <div className="flex gap-2">

                                {user.emailVerified === false ?
                                    <>
                                        <p className="shadow-sm bg-fourth text-sm rounded-md grow md:grow-0 lg:w-1/3 p-2.5 py-3">{user.email}</p>
                                        <button onClick={handleVerify} className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Verify</button>
                                    </>
                                    :
                                    <>
                                        <input type="email" id="email" className="shadow-sm bg-fourth rounded-md grow md:grow-0 lg:w-1/3 p-2.5 py-3" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} required />
                                        <button type="submit" className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Change</button>
                                    </>
                                }
                            </div>
                        </form>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">Account Status</label>
                            <div className="flex gap-2">
                                {user.emailVerified === false ?
                                    <div className="flex items-center gap-1 text-[#ff3131]">
                                        <p>Not verified</p>
                                        <AiFillCloseCircle size={20} />
                                    </div>
                                    :
                                    <div className="flex items-center gap-1 text-[#4ba634]">
                                        <p>Verified</p>
                                        <AiFillCheckCircle size={20} />
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">Full Name</label>
                            <div className="flex gap-2">
                                <p className="text-md">{userData.fullName}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-semibold">Password</label>
                            <div className="flex gap-2">
                                <Link to="/forgot-password" className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Reset Password</Link>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-start gap-7 flex-grow w-full bg-[#ffffff] shadow-lg rounded-lg p-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Created On</p>
                            <p className="shadow-sm bg-fourth text-sm rounded-md w-fit p-2.5 py-3"> {user.metadata?.creationTime}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Last Sign In</p>
                            <p className="shadow-sm bg-fourth text-sm rounded-md w-fit p-2.5 py-3"> {user.metadata?.lastSignInTime}</p>
                        </div>
                    </div>

                </div>

                :
                <></>
            }
        </>
    )
}

export default AccountSettings