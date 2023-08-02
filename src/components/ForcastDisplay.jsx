import React from 'react'
import ForcastCard from './ForcastCard'

function ForcastDisplay( {dailyWeather, changeDate} ) {

  return (
    <div className=''>
        <div className='my-20 flex flex-grow justify-center gap-4'>
        { dailyWeather.map((day) =>
            <ForcastCard
                key={day.title}
                day={day}
                changeDate={changeDate}
            />) }
        </div>
    </div>
  )
}

export default ForcastDisplay
