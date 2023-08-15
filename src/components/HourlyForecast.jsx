import React from 'react'
import HourlyForecastCard from './HourlyForecastCard';

function HourlyForecast({hourlyWeather}) {

    return (
    <div className=' bg-blue-700/50 rounded-xl mx-4 mb-4'>
        <div className='grid grid-flow-col gap-8 ml-4 py-3 overflow-x-scroll'>
            { hourlyWeather.map((hour, index) =>
                <HourlyForecastCard
                key={index}
                hour={hour}
                index={index}
                />
                    )}
        </div>
    </div>
    )
}

export default HourlyForecast