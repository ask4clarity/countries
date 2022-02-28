import React from 'react' 
import Country from './Country'
import Button from './Button'

const Results = ({countries, handleclick}) => {
    console.log(countries)
    const len = countries.length
    if (len === 0) {
      return (
        <p>Search for countries</p>
      )
    }
    else if (len > 10) {
      return (
        <p>Too many matches, please be more detailed</p>
      )
    }
    else if (len <= 10 && len > 1) {
      return (
        countries.map((result, i) =>
          <p key={i}>{result.name.common}  
          <Button click={handleclick} country={result.name.common}/>
          </p>
        )
      )
    }
    else if (len === 1) {
      return (
        <div>
          <Country country={countries[0]}/>
        </div>
      )
    }
  }

  export default Results