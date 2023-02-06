
const Footer = () => {
    return (
        <div className="bg-third">
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center">

                <div className="flex flex-col flex-1 gap-5 text-secondary">
                    <div className="flex flex-wrap md:flex-row gap-10 justify-center md:justify-evenly md:gap-5 my-10">
                        <div className="flex flex-col gap-5">
                            <p className="font-bold text-lg">About</p>
                            <ul className="flex flex-col gap-2">
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Our Team</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="font-bold text-lg">Legal</p>
                            <ul className="flex flex-col gap-2">
                                <li><a href="/">Terms and Conditions</a></li>
                                <li><a href="/">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-lg">&copy; 2022 Hello Buddy</p>
                            <p>All Rights Reserved</p>
                            <p className="font-bold text-secondary">Built & Designed by <a href="https://akhilkumar.dev/" target="_blank" rel="noreferrer" className="text-primary duration-300 hover:text-[#EAB308] cursor-pointer">Akhil</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer