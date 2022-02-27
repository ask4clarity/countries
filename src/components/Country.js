import React from 'react' 

const Country = ({country}) => {
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
        </>
    )
}

export default Country