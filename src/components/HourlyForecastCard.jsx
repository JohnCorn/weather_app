import React from 'react'
import { getIcon } from "../weather_service"

function HourlyForecastCard({hour:{title, details, temp}, index}) {
  return (
    <div className='justify-center text-center text-gray-50 font-medium'>
        <div className='text-sm'>
        {index !== 0 ? title : "Now"}     
        </div>
        <div className='py-1'>
        {getIcon(details, 25)}
        </div>

        <div className='text-lg'>{`${Math.trunc(temp)}°`}</div>
     </div>
  )
}

export default HourlyForecastCard