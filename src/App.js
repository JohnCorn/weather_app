import React, {useState, useEffect} from "react";
import getFormattedWeatherData from "./weather_service";
import { formatCurrentWeather, backgroundColor } from "./weather_service"
import MainDisplay from "./components/MainDisplay";
import ForcastDisplay from "./components/ForcastDisplay";
import NavBar from "./components/NavBar";

function App() 
{
  const[weather, setWeather] = useState({});
  const[location, setLocation] = useState({q: "New York"});
  const[units, setUnits] = useState("imperial");

  const [weatherDisplay, setWeatherDisplay] =useState({})

  useEffect(() => {
    console.log({location});
    const fetchWeather = async () => {
      await getFormattedWeatherData({...location, units})
      .then(data => {
        setWeather(data)
        setWeatherDisplay(data.daily[0])
      })
    }
    
    fetchWeather()
  },[location, units])
    

  function handleChangeCity(cityName)
  {
    console.log("handleChangeCity", cityName);
    setLocation(cityName)
  }

  function handleChangeDate(date)
  {
    for(let i=0; i <= weather.daily.length; i++){
      if (weather.daily[i].title === date){
        setWeatherDisplay(weather.daily[i])
        break
      }
    }
  }

  if (!weather.name)
  {
    return(
      <div>
        <h1>Loading</h1>
      </div>
    )
  }else
  {
    return (
      <div className={ /*backgroundColor(weather.details) + */"bg-gray-300 h-screen w-screen "}>
       
        <NavBar changeCity={handleChangeCity}/>

        <MainDisplay
          displayWeather={weatherDisplay}
          weather={weather}
        />

        <ForcastDisplay
          dailyWeather ={weather.daily}  
          changeDate={handleChangeDate}
        />

      </div>
    );
  }
}

export default App;