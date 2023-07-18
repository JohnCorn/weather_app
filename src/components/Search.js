import React from "react";
import {BsSearch} from "react-icons/bs"
function Search({location, setLocation, setLastLocation, searchLocation, units}) 
{

    function HandleSubmit(event)
    {
        event.preventDefault();
        searchLocation(units);
    }

  return (
    <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto z-10 mt-10">
        <form
        type="text"
        className="flex justify-between items-center w-fit m-auto border-black border-2 rounded-full px-1 py-2 bg-white/10"
        onSubmit ={(e) => HandleSubmit(e)}
        >
            <div>
                <input className ="text-black bg-transparent focus:outline-none pl-2 font-semibold"
                onChange={(event) => {
                    setLocation(event.target.value);
                    setLastLocation(event.target.value);
                }}
                type="text" 
                placeholder="Enter Location"
                value={location}
                />
            </div>

        <button 
        className="text-black px-3"
        onClick={(e) => HandleSubmit(e)}
        >
            <BsSearch size={20}/>
        </button>
        </form>
    </div>
  );
}

export default Search;