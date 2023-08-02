import React from 'react'
import { formatToLocalTime, getIcon } from "../weather_service"
import {motion} from 'framer-motion';

export default function MainDisplay({
    displayWeather:
    {title, details, temp, temp_min, temp_max},
    weather:
    {name, dt, timezone}
    }) 
{

  return (
    <div className='flex justify-center text-gray-900 text-center'>

        {/* Main Text */}
        <div className='mt-5 flex flex-col'>
            
            <motion.div className='text-9xl font-bold'
            animate={{ 
                scale:   1, 
                opacity:  1
            }}>
            {`${Math.trunc(temp)}°`}
            </motion.div>
            <div className='mt-3 text-4xl font-semibold'>
                {details}
            </div>

            <div className='mt-3 font-semibold'>
                {title +' - ' + name}
            </div>

            <div className='text-sm font-semibold'>
                {`Low: ${Math.trunc(temp_min)}° - High: ${Math.trunc(temp_max)}°`}
            </div>

            <div>
                {getIcon(details, 200)}
            </div>

        </div>
    </div>   
  )
}