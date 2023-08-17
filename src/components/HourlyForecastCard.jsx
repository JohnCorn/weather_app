import React from 'react'
import { getIcon, getPrecipitation } from "../weather_service"

function HourlyForecastCard({hour:{title, details, temp, pop}, index}) {
  return (
    <div className='text-center text-gray-50 font-medium flex flex-col justify-between'>
        <div className='text-sm'>
        {index !== 0 ? title : "Now"}     
        </div>
        <div className='py-1'>
            {/* */}
        {getIcon(details, 25)}
          <h1 className='text-xs text-blue-300'>
          {getPrecipitation(details, pop)[0] ? getPrecipitation(details, pop)[1] : ""}
          </h1>
        </div>

        <div className='text-lg'>{`${Math.trunc(temp)}°`}</div>
     </div>
  )
}

export default HourlyForecastCard