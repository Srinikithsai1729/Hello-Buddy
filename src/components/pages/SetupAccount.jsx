import { useState } from "react";
import { BiError } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../server/AuthContext"

const SetupAccount = () => {

    const { saveAccountDetails, user } = UserAuth();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [currency, setCurrrency] = useState('USD');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await saveAccountDetails(user.uid, name, age, currency);
            navigate("/dashboard")
            window.location.reload(false);
            window.scroll(0, 0)

        } catch (e) {
            setError("Error Occured! Try Again")
            console.log(e.code);
        }
    };

    return (
        <div className="bg-fourth">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:p-10 mt-20">

                <div className="flex flex-col gap-7 w-full lg:w-1/3 bg-[#ffffff] shadow-lg rounded-lg p-10">

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="font-bold text-2xl">Account created!</p>
                        <p className="text-sm text-center">Provide few more details and start saving!</p>
                    </div>
                    <form className="flex flex-col text-base" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium">Your full name</label>
                            <input type="text" className="shadow-sm bg-fourth rounded-sm block w-full p-2.5 py-3" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium">Your age</label>
                            <input type="number" className="shadow-sm bg-fourth rounded-sm block w-full p-2.5 py-3" onChange={(e) => setAge(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium">Currency type</label>
                            <select value={currency} onChange={(e) => setCurrrency(e.target.value)} className="shadow-sm bg-fourth rounded-sm block w-full p-2.5 py-3" required>
                                <option value="USD">USD $</option>
                                <option value="EUR">EUR0 €</option>
                            </select>
                        </div>
                        {error
                            &&
                            <div className="flex justify-center items-center gap-1 mb-6 border rounded-md text-fourth bg-[#b8352b] py-2">
                                <BiError size={25} />
                                <p className="text-sm">{error}</p>
                            </div>
                        }
                        <button type="submit" className="text-white bg-third/80 hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 flex self-center">Go to Dashboard </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SetupAccount
