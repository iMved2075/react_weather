import React, { useEffect, useState } from 'react'


const WeatherCard = ({ temp_c, humidity, pressure_mb, wind_kph, weatherMood, name, country }) => {
    const [weatherState, setWeatherState] = useState("");


    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds": setWeatherState("wi-day-cloudy")
                    break;

                case "Overcast": setWeatherState("wi-day-cloudy")
                    break;

                case "Haze": setWeatherState("wi-day-fog")
                    break;

                case "Rain": setWeatherState("wi-day-fog")
                    break;

                case "Clear": setWeatherState("wi-day-sunny")
                    break;

                case "Mist": setWeatherState("wi-dust")
                    break;

                default: setWeatherState("wi-day-sunny")
                    break;
            }
        }
    })

    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp_c}&deg;C</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weatherMood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                {/* our four divided section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside"> 19:19 PM <br /> Sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={`wi wi-humidity`}></i></p>
                            <p className="extra-info-leftside"> {humidity} <br /> Humidity</p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside"> {pressure_mb} mb<br /> Pressure</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside"> {wind_kph} kph<br /> Wind</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard
