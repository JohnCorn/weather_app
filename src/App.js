import React, {useState} from "react";
import Search from "./components/Search";
import UnitSettings from "./components/UnitSettings";
import MainDisplay from "./components/MainDisplay";
import SubDisplay from "./components/SubDisplay";
import WeatherColor from "./components/WeatherColor";
import axios from "axios";
//import Loading from "./components/Loading";

function App() 
{
  const[data, setData] = useState({});
  const[location, setLocation] = useState("");
  const[lastLocation, setLastLocation] = useState("");


  const[units, setUnits] = useState("imperial");

  const key = "179eb7bf8e308d0b7ccd4f85f44e2a3c"

  function searchLocation(unit){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${lastLocation}&units=${unit}&appid=${key}`

    axios.get(url)
    .then((response) => {
      setData(response.data);
      console.log(response.data);
    }).catch((e) => console.log(e));
    setLocation("");
    setUnits(unit)
  }


    return (
      <div>
        <div 
        className="bg-cover h-screen relative bg-gradient-to-b from-orange-200 to-lime-200"
        >
          <WeatherColor data={data}/>
          {/*
          <img
          src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="background"
          className="w-full h-full object-cover absolute"
          /> */}
        </div>

        <div className="px-20 absolute inset-0 z-10">
          <Search 
          location={location} 
          setLocation={setLocation}
          setLastLocation={setLastLocation}
          searchLocation={searchLocation}
          units={units}
          />
          
          {data.name !== undefined &&
            <MainDisplay 
            data={data}
            units={units}
            />
          }

          {data.name !== undefined &&
            <SubDisplay 
            data={data}
            units={units}
            />

            
          }

          {data.name !== undefined &&
            <UnitSettings
            searchLocation={searchLocation}
            units={units}
            />
          }

        </div>

    </div>
    );
}

export default App;