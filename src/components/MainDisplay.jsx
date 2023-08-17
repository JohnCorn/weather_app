import React from 'react'
import { formatToLocalTime, getIcon } from "../weather_service"
import {motion} from 'framer-motion';

export default function MainDisplay({
    displayWeather:
    {title, details, temp, temp_min, temp_max, description},
    weather:
    {name, dt, timezone}
    }) 
{

  return (
    <div className='flex justify-center text-gray-50 text-center mb-8'>

        {/* Main Text */}
        <div className='mt-5 flex flex-col z-10 font-body'>   

            <div className='text-3xl font-extralight'>
                {name}
            </div>

            <motion.div className='text-8xl font-extralight'
            animate={{ 
                scale:   1, 
                opacity:  1
            }}>
            {`${Math.trunc(temp)}°`}
            </motion.div>

            <div className='text-lg font-regular'>
                {description}
            </div>

            <div className='text-lg font-regular'>
                {` H: ${Math.trunc(temp_max)}°  L: ${Math.trunc(temp_min)}°`}
            </div>

        </div>
    </div>   
  )
}