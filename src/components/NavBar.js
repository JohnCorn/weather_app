import React, {useState} from "react";
import { HiOutlineSearch } from "react-icons/hi";

function NavBar( {changeCity} ) 
{
    const[cityName, setCityName] = useState("");

    function handleSubmit(e)
    {
        e.preventDefault()
        changeCity({q: cityName})
        setCityName("")
    }

    return (
        <div className="z-20 pt-6">
            <div className=" flex justify-center">
                <form 
                className="bg-blue-700/50 text-gray-50 rounded-full py-1"
                onSubmit={(e) => handleSubmit(e)}>
                    
                    <input 
                    className="bg-white/0 pl-3"
                    placeholder="Search for a city" 
                    value={cityName} 
                    onChange={(e) => setCityName(e.target.value)}type="text" name="name" >
                    </input>

                    <button
                    className="pr-2"
                    type="submit"><HiOutlineSearch/></button>

                </form>
            </div>
        </div>

    );
}

export default NavBar;