import React from 'react'
import DailyForecastCard from './DailyForecastCard'
import {BsCalendar3}  from "react-icons/bs";

function DailyForecast( {dailyWeather} ) {

  return (
    <div className=' bg-blue-700/50 rounded-xl mx-4 pt-2'>
        <div className='my-2 mx-3 grid grid-rows divide-y divide-gray-50/30'>
          <div className='text-blue-300 mb-3 flex items-center font-body'>
            <BsCalendar3/>
            <div className='ml-2'>
              7-Day Forecast
            </div>
          </div>
          <div className='divide-y divide-gray-50/30'>
        { dailyWeather.map((day, index) =>
            <DailyForecastCard
                key={index}
                day={day}
                index={index}
            />) }
            </div>
        </div>
    </div>
  )
}

export default DailyForecast
