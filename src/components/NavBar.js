import React from "react";
import CityButton from "./CityButton";
import cities from "../city_data.js"

function NavBar( {changeCity} ) 
{

    return (
        <div className='flex justify-center items-center gap-5'>          
            
            {cities.map(({name}) => 
                <CityButton
                key={name} 
                cityName={name}
                changeCity={changeCity}
                /> )}

        </div>
    );
}

export default NavBar;