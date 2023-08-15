import React, {useState} from 'react'
import { getIcon } from "../weather_service"
import {color, motion} from 'framer-motion';

function DailyForecastCard( {day:{title, temp_min, temp_max, details}, index, changeDate}) {

  const[currDay, setCurrDay]=useState(false)

  return (
    <div 
    className=' w-full p-2 items-center text-gray-50'
    onClick={() => changeDate(title)}>

        <div 
        className='flex flex-row font-main text-lg font-medium gap-4'   
        >
            <div className='min-w-[50px]'>{index !== 0 ? title : "Today"}</div>
            <div className='min-w-[25px]'>{getIcon(details, 25)}</div>
            
            <div className='flex flex-row w-full gap-2'>
              <div className='text-blue-300 text-right'>{`${Math.trunc(temp_min)}°`}</div>

              <div className='bg-black rounded-full h-1 w-full my-auto'/>

              <div className='text-left'>{`${Math.trunc(temp_max)}°`}</div>
            </div>

       </div>
    </div>
    
  )
}

export default DailyForecastCard
