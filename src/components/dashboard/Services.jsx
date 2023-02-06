import { MdDesignServices } from "react-icons/md"
import { UserAuth } from "../../server/AuthContext"
import ContentTitle from "./ContentTitle"
import { Disclosure } from '@headlessui/react'
import { useEffect, useState } from 'react'
import emptyImg from "../../assets/images/user/emptyImg.svg"

const Services = () => {

    const tableHeader = ["Name", "Price", "Subscribed on", "Due In"]

    const { user, userData, addServiceData, serviceData, getServiceData } = UserAuth();

    const [serviceName, setServiceName] = useState("")
    const [servicePrice, setServicePrice] = useState("")
    const [serviceStart, setServiceStart] = useState("")
    const [serviceEnd, setServiceEnd] = useState("")

    const [tryData, setTryData] = useState(null)

    const sendToDB = async (e) => {
        e.preventDefault()
        try {

            await addServiceData(user.uid, serviceName, servicePrice, serviceStart, serviceEnd);
            window.location.reload(false);
            window.scroll(0, 0)

        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getServiceData(user.uid)
        setTryData(
            serviceData.docs.map((doc) => ({
                sName: doc.data().sName,
                sPrice: doc.data().sPrice,
                sStart: doc.data().sStart,
                sEnd: doc.data().sEnd
            }))
        )
    }, [])

    return (
        <>
            <div className="flex flex-col gap-5 w-full">

                <ContentTitle title="Services" imageIcon={<MdDesignServices size={25} />} />

                <div className="flex flex-col gap-7 w-full bg-[#ffffff] shadow-lg rounded-lg p-10">
                    {tryData?.length > 0 ?
                        <div className="overflow-x-auto relative -m-5 md:-m-0">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-fourth uppercase bg-primary">
                                    <tr>
                                        {tableHeader.map((eachItem, index) => (
                                            <th key={index} scope="col" className="py-3 px-6 whitespace-nowrap">{eachItem}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tryData.map((eachItem, index) => (
                                        <tr key={index} className="bg-white w-full">
                                            <td className="py-4 px-6 w-1/5">
                                                {eachItem.sName}
                                            </td>
                                            {/* <td className="py-4 px-6 w-1/5">
                                                {eachItem.sType}
                                            </td> */}
                                            <td className="py-4 px-6 w-1/5">
                                                {userData?.currencyType === "USD" ? "$" : "€"}{eachItem.sPrice}
                                            </td>
                                            <td className="py-4 px-6 w-1/5 whitespace-nowrap">
                                                {eachItem.sStart}
                                            </td>
                                            <td className="py-4 px-6 w-1/5 whitespace-nowrap">
                                                {(() => {
                                                    var date1 = new Date(eachItem.sStart);
                                                    var date2 = new Date(eachItem.sEnd);
                                                    var Difference_In_Time = date2.getTime() - date1.getTime();
                                                    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                                    return Difference_In_Days
                                                })()} days
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className="flex flex-col justify-center items-center gap-7 flex-1 px-20">
                            <img alt="heroImage" src={emptyImg} className="w-full md:w-1/3" />
                            <p className="">Your subscription list is empty.</p>
                        </div>
                    }

                    <Disclosure>
                        <Disclosure.Button className="py-2">
                            <p className="p-3 bg-third rounded-md text-sm font-medium duration-200 hover:bg-third/80">Add Service</p>
                        </Disclosure.Button>
                        <Disclosure.Panel className=" -m-10 md:-m-0 py-2 md:py-0">
                            <form className="flex flex-col bg-fourth p-5 rounded-md shadow-md text-base" onSubmit={sendToDB} >
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium">Subscription Name</label>
                                    <input type="text" className="shadow-sm bg-[#ffffff] rounded-sm block w-full p-2.5 py-3" placeholder="Netflix" onChange={(e) => setServiceName(e.target.value)} required />
                                </div>
                                {/* <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium">Type</label>
                                    <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="shadow-sm bg-[#ffffff] text-sm rounded-sm block w-full p-2.5 py-3" required>
                                        <option value="30.436875">Monthly</option>
                                        <option value="91.310625">3 - Months</option>
                                        <option value="182.62125">6 - Months</option>
                                        <option value="365.2425">Yearly</option>
                                    </select>
                                </div> */}
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium">Price ({userData?.currencyType})</label>
                                    <input type="number" className="shadow-sm bg-[#ffffff] rounded-sm block w-full md:w-1/2 p-2.5 py-3" placeholder="20" onChange={(e) => setServicePrice(e.target.value)} required />
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 mb-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Start Date</label>
                                        <input type="date" className="shadow-sm bg-[#ffffff] rounded-sm block w-full p-2.5 py-3" placeholder="Choose" onChange={(e) => setServiceStart(e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">End Date</label>
                                        <input type="date" className="shadow-sm bg-[#ffffff] rounded-sm block w-full p-2.5 py-3" placeholder="Choose" onChange={(e) => setServiceEnd(e.target.value)} required />
                                    </div>
                                </div>

                                <button type="submit" className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center md:self-start">Add</button>
                            </form>
                        </Disclosure.Panel>
                    </Disclosure>

                </div>

            </div>
        </>
    )
}

export default Services
