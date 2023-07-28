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
    let{timezone, daily, hourly} = data

    daily = daily.slice(1, 6).map(day => {
        return {
            title: formatToLocalTime(day.dt, timezone, 'ccc'),
            temp: day.temp.day,
            details: day.weather[0].main,
        }
    })

    hourly = hourly.slice(1, 6).map(hour => {
        return {
            title: formatToLocalTime(hour.dt, timezone, 'hh:mm a'),
            temp: hour.temp,
            details: hour.weather[0].main,
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

const getIcon = (weatherDetails) => {
    switch(weatherDetails)
    {
        case "Thunderstorm":
            return <TiWeatherStormy size={150} className="text-black"/> 

        case "Drizzle":
            return <TiWeatherShower size={150} className="text-black"/>

        case "Rain":
            return <TiWeatherDownpour size={150} className="text-black"/>

        case "Snow":
            return <TiWeatherSnow size={150} className="text-black"/>

        case "Atmosphere":
            return <TiWeatherWindy size={150} className="text-black"/>

        case "Clear":
            return <TiWeatherSunny size={150} className="text-black"/>
        
        case "Clouds":
            return <TiWeatherCloudy size={150} className="text-black"/>

        default:
            return <TiWeatherDownpour size={150} className="text-black"/>
    }
}

export default getFormattedWeatherData

export { formatToLocalTime, getIcon }