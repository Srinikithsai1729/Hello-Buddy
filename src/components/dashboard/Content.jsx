import { Tab } from "@headlessui/react"
import AccountSettings from "./AccountSettings"
import Services from "./Services"

const Content = () => {

    return (
        <Tab.Panels className="flex flex-col gap-7 flex-grow w-full lg:w-1/3">
            {/* <Tab.Panel>Dashboard Settings</Tab.Panel> */}
            <Tab.Panel><Services /></Tab.Panel>
            {/* <Tab.Panel>Notification</Tab.Panel> */}
            <Tab.Panel><AccountSettings /></Tab.Panel>
        </Tab.Panels>
    )
}

export default Content