import { AiOutlineDoubleRight } from "react-icons/ai"
import { Link } from "react-router-dom"
import heroImg from "../../assets/images/home/heroImg.svg"

const Hero = () => {
    return (
        <div className="bg-gradient-to-br from-fourth via-third/40 to-fourth">

            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 p-8 md:p-10 mt-20">

                <div className="flex flex-col flex-1 gap-5 text-secondary">
                    <p className="text-[2rem] md:text-[2.9rem] font-bold leading-tight md:pr-32">Money saving app just for you!</p>
                    <div className="flex grow h-1 w-1/3 bg-third"></div>
                    <p className="text-lg">Save your income in a more robust expenditure tracking system, and stop wasting your hard-earned money by making unwanted payments or by forgetting to pay bills on time. </p>
                    <Link to="/register" className="flex items-center gap-2 self-start border-2 text-xl border-third rounded-lg p-3 text-fourth bg-secondary/90 hover:bg-third hover:border-primary/30 hover:text-secondary font-semibold duration-300 transition-all">
                        <p>Get started</p>
                        <AiOutlineDoubleRight size={15} />
                    </Link>
                </div>

                <div className="flex-1">
                    <img alt="heroImage" src={heroImg} />
                </div>

            </div>

        </div>
    )
}

export default Hero
