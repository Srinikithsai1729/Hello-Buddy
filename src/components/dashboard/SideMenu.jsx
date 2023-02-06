import { Tab } from '@headlessui/react'
import { sideMenu } from '../../data/DashboardData'
import { Menu } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../server/AuthContext';

const SideMenu = () => {

    const { isActive, switchTab, userData, logout } = UserAuth();

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            {userData !== null ?
                <div className="flex flex-col gap-3 md:gap-7 justify-center items-center h-fit bg-primary md:bg-secondary text-fourth md:shadow-secondary md:shadow-md md:rounded-lg px-10 py-5 md:p-10">
                    <div className='flex justify-between w-full'>
                        <p className="font-bold text-3xl md:text-xl">Hi {userData?.fullName},</p>
                        <button onClick={handleLogout} className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex md:hidden self-center">Logout</button>
                    </div>

                    <div className='flex'>

                        <Tab.List className="flex md:flex-col gap-3 items-start w-full bg-secondary p-3 md:p-0 rounded-md">
                            {sideMenu.map((eachItem, index) => (
                                <Tab key={eachItem.id} className={isActive === index ? `text-third flex items-center justify-center gap-3 selection:border-none` : `flex items-center justify-center gap-3 selection:border-none`} onClick={() => switchTab(index)}><eachItem.icon size={20} className="hidden md:flex" />{eachItem.name}</Tab>
                            ))}
                        </Tab.List>

                    </div>
                    <button onClick={handleLogout} className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 hidden md:flex self-center">Logout</button>
                </div>
                :
                <></>
            }
        </>
    )
}

export default SideMenu