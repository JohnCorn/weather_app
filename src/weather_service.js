import {DateTime} from "luxon"
import {TiWeatherSunny, TiWeatherCloudy, TiWeatherStormy, TiWeatherShower, TiWeatherDownpour, TiWeatherSnow, TiWeatherWindy} from "react-icons/ti"

const API_KEY = "179eb7bf8e308d0b7ccd4f85f44e2a3c"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})

    return fetch(url)
        .then((res) => res.json())
}

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {sunrise, sunset},
        weather,
        wind:{speed},
    } = data

    const {main: details, description} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name,
    dt, sunrise, sunset, speed, details, description}
}

const formatForcastWeather = (data) =>{
    console.log(data)
    let{timezone, daily, hourly} = data

    daily = daily.slice(0, 7).map(day => {
        return {
            title: formatToLocalTime(day.dt, timezone, 'ccc'),
            temp: day.temp.day,
            temp_min: day.temp.min,
            temp_max: day.temp.max,
            details: day.weather[0].main,
            pop: day.pop
        }
    })

    hourly = hourly.slice(0, 26).map(hour => {
        return {
            title: formatToLocalTime(hour.dt, timezone, 'hh'),
            temp: hour.temp,
            details: hour.weather[0].main,
            pop: hour.pop
        }
    })

    return{timezone, daily, hourly}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams)
    .then(formatCurrentWeather)

    const {lat, lon} = formattedCurrentWeather

    const formattedForcastWeather = await getWeatherData('onecall', 
    {
        lat,
        lon, 
        exclude: "current,minutely,alerts", 
        units: searchParams.units,
    }).then(formatForcastWeather)


    return {...formattedCurrentWeather, ...formattedForcastWeather}
}

const formatToLocalTime = (
    secs, 
    zone, 
    format = "cccc, dd, LLL, yyyy' | Local time: 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const getIcon = (weatherDetails, size) => {
    const c =""

    switch(weatherDetails)
    {
        case "Thunderstorm":
            return <TiWeatherStormy size={size} className={c}/> 

        case "Drizzle":
            return <TiWeatherShower size={size} className={c}/>

        case "Rain":
            return <TiWeatherDownpour size={size} className={c}/>

        case "Snow":
            return <TiWeatherSnow size={size} className={c}/>

        case "Atmosphere":
            return <TiWeatherWindy size={size} className={c}/>

        case "Clear":
            return <TiWeatherSunny size={size} className={c}/>
        
        case "Clouds":
            return <TiWeatherCloudy size={size} className={c}/>

        default:
            return <TiWeatherDownpour size={size} className={c}/>
    }
}

const getPrecipitation = (weatherDetails, pop) => {
    const formatPop = (pop.toFixed(1) * 100) + "%"

    switch(weatherDetails)
    {
        case "Thunderstorm":          
        case "Drizzle":          
        case "Rain":      
        case "Snow":
            return [true, formatPop];

        default:
            return [false, formatPop];
    }
}

const backgroundColor = (weatherDetails) =>
    {
        switch(weatherDetails)
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

export default getFormattedWeatherData

export { formatToLocalTime, getIcon, backgroundColor, getPrecipitation }