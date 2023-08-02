import React, {useState} from "react";

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
        <div className="pt-10">
            <div className=" flex justify-center">
                <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="enter city name" value={cityName} onChange={(e) => setCityName(e.target.value)}type="text" name="name" />
                <input    
                type="submit" 
                value="Submit" />
                </form>
            </div>
        </div>

    );
}

export default NavBar;