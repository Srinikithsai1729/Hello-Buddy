import { Squeeze as Hamburger } from 'hamburger-react'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../server/AuthContext'
import logo from "../../assets/images/common/logo.svg"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const { user } = UserAuth()

    const menuItems = [
        {
            id: 1,
            name: "About us",
            url: "/about",
        },
        {
            id: 2,
            name: "Features",
            url: "/features",
        },
    ]

    return (
        <>
            <div className="absolute top-0 w-full h-20 bg-secondary text-fourth shadow-2xl shadow-primary">

                <div className="relative flex items-center justify-between h-full px-10">

                    <Link to="/" className='w-[12rem] lg:w-[15rem]'>
                        <img src={logo} alt="Hello Buddy" className="" />
                    </Link>

                    <div className="hidden lg:flex gap-8 items-center">
                        {menuItems.map((eachItem, index) => (
                            <Link to={eachItem.url} key={index} className="flex hover:text-third duration-300 transition-all">{eachItem.name}</Link>
                        ))}
                        {user
                            ?
                            <></>
                            :
                            <Link to="/login" className="flex hover:text-third duration-300 transition-all">Login</Link>
                        }
                        <Link to={user ? "/dashboard" : "/register"} className="border-2 border-third rounded-lg p-2 px-3 hover:bg-third hover:text-secondary font-semibold duration-300 transition-all">{user ? "My Account" : "Create an Account"}</Link>
                    </div>

                    <div className="flex lg:hidden">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                    </div>

                    <div className={`absolute z-40 h-auto w-full top-20 left-0 duration-300 transition-all  ${isOpen ? "flex" : "top-[-350px]"}`}>
                        <div className="flex lg:hidden flex-col w-full bg-secondary text-fourth">
                            <div>
                                {menuItems.map((eachItem, index) => (
                                    <div key={index} className="border border-t-0 border-x-0 border-primary px-10 py-5">
                                        <Link onClick={() => setIsOpen(false)} to={eachItem.url} className="text-xl hover:text-third duration-300 transition-all">{eachItem.name}</Link>
                                    </div>
                                ))}
                            </div>
                            {user
                                ?
                                <></>
                                :
                                <div className="border border-t-0 border-x-0 border-primary px-10 py-5">
                                    <Link onClick={() => setIsOpen(false)} to="/login" className="text-xl hover:text-third duration-300 transition-all">Login</Link>
                                </div>
                            }
                            <Link onClick={() => setIsOpen(false)} to={user ? "/dashboard" : "/register"} className="mx-10 my-5 gap-1 border-2 text-xl text-center border-third rounded-lg p-3 hover:bg-third hover:text-secondary font-semibold duration-300 transition-all">{user ? "My Account" : "Create an Account"}</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
