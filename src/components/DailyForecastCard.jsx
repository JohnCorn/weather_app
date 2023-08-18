import React, {useState} from 'react'
import { getIcon, getPrecipitation } from "../weather_service"
import {color, motion} from 'framer-motion';
import DailyFeelsBar from './DailyFeelsBar';

function DailyForecastCard( {day:{title, temp_min, temp_max, details, pop, temp_morn, temp_night}, index}) {

  
  return (
    <div 
    className=' w-full p-2 items-center text-gray-50'>

        <div 
        className='flex flex-row font-main text-lg font-medium gap-4'   
        >
            <div className='my-auto min-w-[50px]'>{index !== 0 ? title : "Today"}</div>

            <div className='my-auto min-w-[25px]'>{getIcon(details, 25)}
              <h1 className='text-xs text-blue-300'>
              {getPrecipitation(details, pop)[0] ? getPrecipitation(details, pop)[1] : ""}
              </h1>
            </div>
            
            <div className='my-auto flex flex-row w-full gap-2'>
              <div className='text-blue-300 text-right'>{`${Math.trunc(temp_min)}°`}</div>

              <div className='relative bg-blue-800/50 rounded-full h-1 w-full my-auto'>
                <DailyFeelsBar
                 temp_min = {temp_min}
                temp_max ={temp_max}
                  temp_morn ={temp_morn}
                  temp_night={ temp_night}
                />
              </div>

              <div className='text-left'>{`${Math.trunc(temp_max)}°`}</div>
            </div>

       </div>
    </div>
    
  )
}

export default DailyForecastCard
