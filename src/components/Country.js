import React, {useState, useEffect} from 'react' 
import axios from 'axios'
import Weather from './Weather'

const Country = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [latlng, setLatlng] = useState([])

    console.log(latlng)

    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital}&limit=1&appid=${api_key}`)
        .then(response => {
            setLatlng(response.data)
        })

    }, [api_key, country.capital])

    return (
        <>
        <h1>{country.name.common}</h1>
        Capital - {country.capital}
        <br></br>
        Area - {country.area}
        <ul>
            {Object.entries(country.languages).map(([k, v]) =>
            <li key={k}>{v}</li>
            )}
        </ul>
        <img src={country.flags.png} alt="flag"></img>
        <h1>Weather in {country.capital}</h1>
        <Weather latlng={latlng} api_key={api_key}/>
        </>
    )
}

export default Country