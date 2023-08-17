import React, {useState, useEffect} from "react";
import getFormattedWeatherData from "./weather_service";
import { formatCurrentWeather, backgroundColor } from "./weather_service"
import MainDisplay from "./components/MainDisplay";
import DailyForecast from "./components/DailyForecast";
import NavBar from "./components/NavBar";
import HourlyForecast from "./components/HourlyForecast";
import ErrorAlert from "./components/ErrorAlert";

function App() 
{
  const[showAlert, setShowAlert] = useState(false);

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
      }).catch(() => setShowAlert(true))
    }
    
    fetchWeather()
  },[location, units])
    
  function handleChangeCity(cityName)
  {
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
      <div className={"bg-gradient-to-b from-blue-500 to-blue-400 justify-between min-h-screen"}>
       <ErrorAlert 
        show={showAlert}
        setShowAlert={setShowAlert}
       />

        <NavBar changeCity={handleChangeCity}/>

        <MainDisplay
          displayWeather={weather}
          weather={weather}
        />

        <div className='justify-center max-w-[500px] mx-auto'>
          <HourlyForecast
            hourlyWeather ={weather.hourly}  
          />

          <DailyForecast
            dailyWeather ={weather.daily}  
            changeDate={handleChangeDate}
          />
        </div>

      </div>
    );
  }
}

export default App;