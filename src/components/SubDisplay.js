import React from "react";

function SubDisplay({data, units}) 
{

  const descriptionText = "text-sm sm:text-xl font-bold";
  const detailText = "text-sm sm:text-lg font-semibold";
  const lineClass ="bg-black rounded-full w-1 h-1/3 sm:h-2/3";
  return (
    <div className="bottom-0 left-0 right-0 top-0 rounded-xl text-center mx-20 mb-10 h-40 relative">

      <div className="flex justify-center gap-1 sm:gap-5 items-center mx-auto px-auto absolute bottom-0 left-0 right-0 top-0">

        <div>
          <p className={detailText}>{data.main !=null ? (data.main.feels_like.toFixed(0) + (units === "imperial" ? "°F" : "°C")) : "---"}</p>
          <p className={descriptionText}>Feels Like</p>
        </div>

        <div className={lineClass}></div>

        <div className="">
          <p className={detailText}>{data.main !=null ? (data.main.humidity + "%") : "---"}</p>
          <p className={descriptionText}>Humidity</p>
        </div>

        <div className={lineClass}></div>

        <div className="wind">
          <p className={detailText}>{data.wind !=null ? (data.wind.speed.toFixed(0) + (units === "imperial" ? " MPH" : " KPH")) : "---"}</p>
          <p className={descriptionText}>Wind Speed</p>
        </div>

    </div>
  </div>
  );
}

export default SubDisplay;