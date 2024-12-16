import React from 'react'

export const WeatherDetailComp = ({data}) => {

    const {icon, text} = data[0].current.condition
    const {feelslike_c, heatindex_c} = data[0].current
  return (
    <div className="flex justify-center align-middle">
      <div className="bg-slate-200 h-96 w-80 ">
        <div className='m-5'>
          {text}
          <img src={icon} alt="countryImg" />
        </div>
        <div className='m-5 flex'>
        feelslike: {feelslike_c} Celcious
        heatindex: {heatindex_c} Celcious
        </div>
      </div>
    </div>
  );
}
