import { AiFillSignal } from "react-icons/ai"
import { FaCalculator } from "react-icons/fa"

const SectionOne = () => {
    return (
        <div className="bg-fourth">
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 p-8 md:p-10 md:py-20">
                <div className="flex flex-col flex-1 gap-5 justify-center items-start md:items-center text-secondary">
                    <p className="text-[2rem] md:text-[2.9rem] font-bold leading-tight">Our app can help you with..</p>
                    <div className="flex grow h-1 w-1/3 bg-third"></div>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10">
                        <div className="flex flex-col justify-center items-center gap-7 px-0 md:px-32">
                            <FaCalculator size={40} className="text-third" />
                            <h1 className="text-[1.5rem] font-semibold leading-tight text-center">Make a spending plan that works for you</h1>
                            <p className="text-lg">Create a budget that will automatically track your spending by category and keep you moving in the right direction. </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-7 px-0 md:px-32">
                            <AiFillSignal size={40} className="text-third" />
                            <h1 className="text-[1.5rem] font-semibold leading-tight text-center">Recognize and increase your net worth</h1>
                            <p className="text-lg">Get a complete view of your debt and assets in one location. Track your financial progress and make adjustments.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SectionOne