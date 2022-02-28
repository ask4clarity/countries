import React, {useEffect, useState} from 'react' 
import axios from 'axios'

const Weather = ({latlng, api_key}) => {
    const [weather, setWeather] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (latlng.length > 0) {
            axios
            .get(`http://api.openweathermap.org/data/2.5/weather?lat=${latlng[0].lat}&lon=${latlng[0].lon}&units=imperial&appid=${api_key}`)
            .then(response => {
            setWeather(response.data)
            setLoading(false)
            })          
        }
  
    }, [latlng, api_key])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    else {
        return (
            <div>
                <p>Temp {weather.main.temp} Fahrenheit</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather" />
                <p>Wind {weather.wind.speed} m/s</p>
            </div>
        )
    }
}

export default Weather


