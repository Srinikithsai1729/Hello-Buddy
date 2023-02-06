import SideMenu from "../dashboard/SideMenu"
import { Tab } from '@headlessui/react'
import Content from "../dashboard/Content"
import { UserAuth } from "../../server/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Dashboard = () => {

    const { userData } = UserAuth();
    console.log(userData)

    const navigate = useNavigate()

    useEffect(() => {
        if (userData === undefined)
            navigate("/setup-account")
    }, [])

    return (
        <div className="bg-fourth">

            <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 md:p-10 mt-20 relative">

                {userData !== null ?
                    <Tab.Group>
                        <div className="flex flex-col md:flex-row w-full md:gap-10">
                            <SideMenu />
                            <Content />
                        </div>
                    </Tab.Group>
                    :
                    <>
                        <h1>Loading, please wait...</h1>
                    </>
                }
            </div>

        </div>
    )
}

export default Dashboard