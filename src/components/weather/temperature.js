import React, { useEffect, useState } from 'react'
import "./style.css"
import WeatherCard from './weatherCard'



const Temperature = () => {

  const [searchValue, setSearchValue] = useState("Bhubaneswar")
  const [tempInfo,setTempInfo] = useState({})

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${searchValue}`

      const res = await fetch(url)
      const data = await res.json()

      const { temp_c, humidity, pressure_mb, wind_kph } = data.current
      const temp0 = data.current
      const { text: weatherMood } = temp0.condition
      const { name, country } = data.location

      const myNewWeatherInfo = {
        temp_c, humidity, pressure_mb, wind_kph,weatherMood,name, country
      } 

      setTempInfo(myNewWeatherInfo)

    } catch (error) {
      console.log(error)
      // alert(error)
    }
  }

  useEffect(() => {
    getWeatherInfo()
  }, [])

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search" placeholder="Search..." autoFocus id="search" className='searchTerm'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
      {/* our temp card */}
      <WeatherCard {...tempInfo}/>
    </>
  )
}

export default Temperature
