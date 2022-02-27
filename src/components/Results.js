import React from 'react' 
import Country from './Country'

const Results = ({countries}) => {
    console.log(countries)
    const len = countries.length
    if (len > 10) {
      return (
        <p>Too many matches, please be more detailed</p>
      )
    }
    else if (len <= 10 && len > 1 || len === 0) {
      return (
        countries.map((result, i) =>
          <p key={i}>{result.name.common}</p>
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