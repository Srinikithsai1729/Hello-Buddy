import safeImg from "../../assets/images/home/safeImg.svg"
import { AiFillStar } from "react-icons/ai"

const Users = () => {
    return (
        <div className="bg-secondary">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10 p-8 md:p-10">

                <div className="flex-1">
                    <img alt="heroImage" src={safeImg} />
                </div>

                <div className="flex flex-col flex-1 gap-5 text-fourth">

                    <p className="text-2xl font-bold leading-tight md:pr-32">Trusted by many users worldwide</p>
                    <div className="flex grow h-1 w-1/3 bg-third"></div>
                    <div className="flex">
                        <AiFillStar size={25} className="text-[#ffd931]" />
                        <AiFillStar size={25} className="text-[#ffd931]" />
                        <AiFillStar size={25} className="text-[#ffd931]" />
                        <AiFillStar size={25} className="text-[#ffd931]" />
                        <AiFillStar size={25} className="text-fourth" />
                    </div>
                    <p className="text-lg">We worked hard to protect your data and store them in a more private space. With our Advanced Encryption Technology (AET), we store your data in our secured database. </p>

                </div>

            </div>
        </div>
    )
}

export default Users
