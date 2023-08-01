export default function WeatherColor(data) 
{
    switch(data)
    {
        case "Thunderstorm":
            return "bg-gradient-to-t from-slate-400 to-slate-600"

        case "Drizzle":
            return "bg-gradient-to-t from-blue-500 to-slate-500"

        case "Rain":
            return "bg-[#3F71EE]"

        case "Snow":
            return "bg-gradient-to-t from-gray-200 to-cyan-100";

        case "Atmosphere":
            return "bg-red-200"

        case "Clear":
            return "bg-[#86E3DE]"
        
        case "Clouds":
            return "bg-[#89A9B6]"
        
        default:
            return "bg-gradient-to-t from-gray-500 to-slate-500";
    }
}