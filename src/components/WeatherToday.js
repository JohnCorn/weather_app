import React from "react";
import { formatToLocalTime, getIcon } from "../weather_service"
import { TiArrowDownThick, TiArrowUpThick, } from "react-icons/ti";
import { TbSunrise, TbSunset } from "react-icons/tb";

function WeatherToday({weather:
    {dt, timezone, name, details, description, temp, temp_min, temp_max, sunrise, sunset 
    }, 
    units}){

  return (
    <div className="flex justify-center text-center items-center">
        <div>

            <div className="h-full w-full">
                <div>
                    <p className="font-extrabold text-6xl">{name}</p>

                    <p className="font-semibold text-lg">{formatToLocalTime(dt, timezone, "cccc LLLL dd h:mm a")}</p>
                </div>

                <div className=" flex justify-center text-center items-center">            
                    {getIcon(details)}     
                </div>           

                <div className="font-semibold text-lg">
                    <h1>{description.toLowerCase()}</h1>
                </div>

                <div className="font-bold text-8xl">
                    <h1>{Math.trunc(temp) + (units === "imperial" ? "°F" : "°C")}</h1>

                    <div className="font-normal text-xl grid grid-flow-col gap-2 items-center mt-2 p-2">

                        <div className="grid grid-flow-col gap-1 items-center">
                            <TbSunrise/>
                            <h1 className="text-sm">Rise</h1>
                            <h1>{formatToLocalTime(sunrise, timezone, "h:mm a")}</h1>
                        </div>

                        <div className="h-full w-full">
                            <div className="bg-black h-full w-1 rounded"/>
                        </div>

                        <div className="grid grid-flow-col gap-1 top-0">
                            <TbSunset/>
                            <h1 className="text-sm">Set</h1>
                            <h1>{ formatToLocalTime(sunset, timezone, "h:mm a")}</h1>
                        </div>

                        <div className="h-full w-full">
                            <div className="bg-black h-full w-1 rounded"/>
                        </div>

                        <div className="grid grid-flow-col gap-1 items-center">
                            <TiArrowDownThick/>
                            <h1 className="text-sm">Low</h1>
                            <h1>{ Math.trunc(temp_min) + (units === "imperial" ? "°F" : "°C")}</h1>
                        </div>

                        <div className="h-full w-full">
                            <div className="bg-black h-full w-1 rounded"/>
                        </div>

                        <div className="grid grid-flow-col gap-1 items-center">
                            <TiArrowUpThick/>
                            <h1 className="text-sm">High</h1>
                            <h1>{Math.trunc(temp_max) + (units === "imperial" ? "°F" : "°C")}</h1>
                        </div>
                    </div>

                </div>
            
            </div>
        </div>
    </div>
  );
}

export default WeatherToday;