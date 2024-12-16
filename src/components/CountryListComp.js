import React, { useEffect, useState } from 'react'
import { CountryList } from '../constant/CountryList';
import { WeatherDetailComp } from './WeatherDetailComp';

const CountryListComp = () => {


  const [countryList, setCountryList] = useState(CountryList)

  const [searchText, setSearchtext] = useState('')

  const [weatherData, setWeatherData] = useState([])
  const [showWeatherDetail, setShowWeatherDetail] = useState(false)

      const fetchData = async (name) => {
        const data = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=9566ad33f5eb4bb2ad182928241612&q=${name}&aqi=no`
        );
        const json = await data.json();
        const mainData = [json]
        setWeatherData(mainData)
        setShowWeatherDetail(true)
      };

      const handleOnClick = (name) => {
        fetchData(name)
      }

        return (
          <div>
            { !showWeatherDetail ? <div>
              <div className="m-5">
                <input
                  type="text"
                  placeholder="Enter city"
                  className="col-span-9 p-2 rounded-md w-60 border-black"
                  onChange={(e) => setSearchtext(e.target.value)}
                ></input>
                <button
                  className="ml-4 bg-blue-700 w-28 h-11 rounded-lg text-white"
                  onClick={() => {
                    const countryListData = countryList.filter((itm) =>
                      itm.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setCountryList(countryListData);
                  }}
                >
                  Search
                </button>
              </div>
              <div className="bg-slate-500 flex flex-wrap overflow-x-scroll hide-scrollbar">
                {countryList?.map((itm, index) => {
                  return (
                    <div
                      className="rounded overflow-hidden shadow-lg bg-white m-5 w-64"
                      onClick={() => handleOnClick(itm.name)}
                    >
                      <img
                        className="w-full h-48"
                        // src={imageUrl}
                        // alt={title}
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800">
                          {itm.name}
                        </h2>
                        <p className="text-gray-600 mt-2">
                          top 10 best countries
                        </p>
                      </div>
                      <div className="px-4 py-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                          See weather report
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            :
            <div>
              <WeatherDetailComp data={weatherData}/>
            </div>
            }
          </div>
        );
}

export default CountryListComp