import React from "react";
import { formatToLocalTime, getIcon } from "../weather_service"
import { TiArrowDownThick, TiArrowUpThick, } from "react-icons/ti";
import { TbSunrise, TbSunset } from "react-icons/tb";

function WeatherToday({weather:
    {dt, timezone, name, details, description, temp, temp_min, temp_max, sunrise, sunset 
    }, 
    units}){

  return (
    <div className="mt-2">

        <div className="mx-4">

            <div className="">
                <p className="font-semibold text-md">{formatToLocalTime(dt, timezone, "cccc LLL dd")}</p>
                <p className="font-extrabold text-4xl">{name}</p>

                <p className="font-semibold text-lg">{formatToLocalTime(dt, timezone, "h:mm a")}</p>                                    
            </div>

            <div className="relative mt-4">
                <div className="relative justify-center text-center z-10">            
                    <h1 className="font-bold text-8xl">{Math.trunc(temp) + (units === "imperial" ? "°F" : "°C")}</h1>
                    <h1 className="font-semibold text-xl">{description.toLowerCase()}</h1>
                </div>  

                <div className="absolute right-20 bottom-12 inset-0 flex justify-center text-center items-center">            
                    {getIcon(details)}     
                </div>  
            </div>

            <div className="border-2 max-w-[500px] grid grid-cols-3 items-center mx-auto">
                <div className="border-2 grid grid-flow-row">
                    <div className="flex justify-around items-baseline">
                        <TbSunrise/>
                        <h1>{formatToLocalTime(sunrise, timezone, "h:mm a")}</h1>
                    </div>

                    <div className="flex justify-around items-baseline">
                        <TbSunset/>
                        <h1>{ formatToLocalTime(sunset, timezone, "h:mm a")}</h1>
                    </div>
                </div>

                <div className="border-2 grid grid-flow-row mt-2"> 
                    <div className="flex justify-around items-baseline">
                        <TiArrowUpThick/>
                        <h1>{Math.trunc(temp_max) + (units === "imperial" ? "°F" : "°C")}</h1>
                    </div>

                    <div className="flex justify-around items-baseline">
                        <TiArrowDownThick/>
                        <h1>{ Math.trunc(temp_min) + (units === "imperial" ? "°F" : "°C")}</h1>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WeatherToday;