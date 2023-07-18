import React from "react";
import {TiWeatherSunny, TiWeatherCloudy, TiWeatherStormy, TiWeatherShower, TiWeatherDownpour, TiWeatherSnow, TiWeatherWindy} from "react-icons/ti"

function MainDisplay({data, units}) 
{

    function GetIcons()
        {
            switch(data.weather[0].main)
            {
                case "Thunderstorm":
                    return (<TiWeatherStormy size={150} className="text-black"/>)

                case "Drizzle":
                    return (<TiWeatherShower size={150} className="text-black"/>)

                case "Rain":
                    return (<TiWeatherDownpour size={150} className="text-black"/>)

                case "Snow":
                    return (<TiWeatherSnow size={150} className="text-black"/>)

                case "Atmosphere":
                    return (<TiWeatherWindy size={150} className="text-black"/>)

                case "Clear":
                    return (<TiWeatherSunny size={150} className="text-black"/>)
                
                case "Clouds":
                    return (<TiWeatherCloudy size={150} className="text-black"/>)
            };
        }

  return (
    <div className="flex justify-center text-center items-center h-2/3">
        <div>
            <div className="font-extrabold text-5xl">
                <p>{data.name !=null ? data.name.toUpperCase() : ""}</p>
            </div>

            <div className="font-semibold text-lg pt-1">
                <h1>{data.weather !=null ? data.weather[0].main.toLowerCase() : ""}</h1>
            </div>

            <div className=" flex justify-center text-center items-center my-4">            
                {GetIcons()}
            </div>

            <div className="font-bold text-8xl">
                <h1>{data.main !=null ? (data.main.temp.toFixed(0) + (units === "imperial" ? "°F" : "°C")) : ""}</h1>

                <div className="font-normal text-xl grid grid-cols-3 justify items-center pt-4">
                    <h1 className="text-right px-2">{data.main !=null ? (data.main.temp_min.toFixed(0) + (units === "imperial" ? "°F" : "°C")) : ""}</h1>
                    <div className="bg-black rounded-full h-1"></div>
                    <h1 className="text-left px-2">{data.main !=null ? (data.main.temp_max.toFixed(0) + (units === "imperial" ? "°F" : "°C")) : ""}</h1>
                </div>

            </div>


           
        </div>
    </div>
  );
}

export default MainDisplay;