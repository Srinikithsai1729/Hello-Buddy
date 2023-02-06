import { BsCheckLg } from "react-icons/bs"
import { ImCross } from "react-icons/im"

const MessageAlert = ({ name, message, type }) => {


    return (

        <div className={type === "success" ? `border-[#4ba634] bg-[#cadbc5] border-t-4 rounded-b px-4 py-3 shadow-md absolute top-[8%] left-1/2 -translate-x-1/2 -translate-y-1/2` : `border-[#ff3131] bg-[#eac3c3] border-t-4 rounded-b px-4 py-3 shadow-md absolute top-[8%] left-1/2 -translate-x-1/2 -translate-y-1/2`}>
            <div className="flex gap-2 justify-center items-center">
                <div className="py-1">
                    {type === "success" ?
                        <BsCheckLg size={20} className="" />
                        :
                        <ImCross size={20} className="" />}
                </div>
                <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-sm">{message}</p>
                </div>
            </div>
        </div>

    )
}

export default MessageAlert
