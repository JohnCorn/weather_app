import React from "react";

function WeatherColor({data}) 
{
    if (data.weather)
    {
        function GetColor()
        {
            switch(data.weather[0].main)
            {
                case "Thunderstorm":
                    return "bg-gradient-to-t from-slate-400 to-slate-600"

                case "Drizzle":
                    return "bg-gradient-to-t from-blue-500 to-slate-500"

                case "Rain":
                    return "bg-gradient-to-t from-slate-500 to-blue-100"

                case "Snow":
                return "bg-gradient-to-t from-gray-200 to-cyan-100";

                case "Atmosphere":
                    return "bg-red-200"

                case "Clear":
                    return "bg-gradient-to-t from-cyan-500 to-blue-500"
                
                case "Clouds":
                    return "bg-gradient-to-t from-gray-500 to-slate-500"
            };
        }

        return (
            <div className={GetColor() +" z-[1] w-full h-full object-cover absolute"}/>       
        );
        }
}

export default WeatherColor;