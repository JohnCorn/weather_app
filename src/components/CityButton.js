import React from 'react'
import {motion} from 'framer-motion';

export default function CityButton( {cityName, changeCity} ) 
{

  return (
    <motion.button 
    onClick={() => changeCity({q: cityName})}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className="bg-yellow-500 rounded-md w-20 h-2/3 font-bold">
        {cityName}
    </motion.button>    
  )
}