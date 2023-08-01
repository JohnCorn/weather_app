import React, {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import WeatherToday from "./components/WeatherToday";
import WeatherColor from "./components/WeatherColor";
import formatCurrentWeather from "./weather_service"
import getFormattedWeatherData from "./weather_service";
function App() 
{
  const[weather, setWeather] = useState({});
  const[location, setLocation] = useState({q: "New York"});
  const[units, setUnits] = useState("imperial");

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...location, units})
      .then(data => {
        setWeather(data)
        console.log(data)
      })
    }
    
    fetchWeather()
  },[location, units])
    

  function handleChangeCity(cityName)
  {
    console.log("handleChangeCity", cityName);
    setLocation(cityName)
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
        <div className={ WeatherColor(weather.details) + " h-screen w-screen "}>

          <NavBar
            changeCity={handleChangeCity}
          />
      
          <WeatherToday 
            weather={weather}
            units={units}
          />   
 
              </div>
    );
  }
}

export default App;