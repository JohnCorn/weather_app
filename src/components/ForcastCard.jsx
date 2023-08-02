import React, {useState} from 'react'
import { getIcon } from "../weather_service"
import {color, motion} from 'framer-motion';

function ForcastCard( {day:{title, temp, temp_min, temp_max, details}, changeDate}) {

  const[currDay, setCurrDay]=useState(false)

  return (
    <motion.div
    layout
    // initial={{ scale: 0.8, opacity: 0 }}
    whileHover={{ 
      scale: 1.25, 
  }}

  whileTap={{ 
      scale: 0.75,
  }}
    transition={{ 
      type: "spring", 
    }} 
    className=''
    onClick={() => changeDate(title)}>
        <motion.div 
        className='flex flex-col shadow-lg shadow-black/25 bg-white py-2 px-4 rounded-xl items-center text-center'
        animate={{
          background: "#00C8F2"
        }}
        >
           
            <div>{title}</div>
            {getIcon(details, 35)}
            <div>{`${Math.trunc(temp_min)}° - ${Math.trunc(temp_max)}°`}</div>
       </motion.div>
    </motion.div>
    
  )
}

export default ForcastCard
