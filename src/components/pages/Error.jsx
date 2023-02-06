import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import errorImg from '../../assets/images/error/404.svg'

const Error = () => {
    return (
        <div className="bg-gradient-to-br from-fourth via-third/40 to-fourth text-secondary">

            <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 p-8 md:p-10 mt-20">

                <p className="text-[2rem] font-bold leading-tight">Can't find the page</p>
                <img alt="heroImage" src={errorImg} className="h-[15rem]" />
                <Link to="/" className="flex items-center gap-2 border-2 text-xl border-third rounded-lg p-3 text-fourth bg-secondary/90 hover:bg-third hover:border-primary/30 hover:text-secondary font-semibold duration-300 transition-all">
                    <p>Go to home</p>
                    <AiOutlineDoubleRight size={15} />
                </Link>

            </div>

        </div>
    )
}

export default Error