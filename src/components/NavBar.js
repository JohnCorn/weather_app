import React from "react";
import CityButton from "./CityButton";
import cities from "../city_data.js"

function NavBar( {changeCity} ) 
{

    return (
        <div className="h-10">
            <div className='flex justify-around items-center'>          
                
                {cities.map(({name}) => 
                    <CityButton
                    key={name} 
                    cityName={name}
                    changeCity={changeCity}
                    /> )}
            </div>
        </div>

    );
}

export default NavBar;