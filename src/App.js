import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Results from './components/Results'

function App() {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setAllCountries(response.data)
    })
  }, [])

  useEffect(() => {
    if (search === '') {
      setCountries('')
    }
    else {
      const searchResults = allCountries.filter(country => 
      country.name.common.toLowerCase().includes(search.toLowerCase()))
      setCountries(searchResults)
    }
  }, [search])

  const handleSearch = (event) => {
    if (event.target.value === ' ') {
      setCountries('')
      setSearch('')
    }
    else {
      setSearch(event.target.value)
      console.log(search)
    }
  }

  const handleClick = (result) => {
    const clickResults = allCountries.filter(country => 
    country.name.common.toLowerCase().includes(result.country.toLowerCase()))
    setCountries(clickResults)
    console.log(result)
  }

  return (
    <div>
    <Search search={search} handlesearch={handleSearch}/>
    <Results countries={countries} handleclick={handleClick}/>
    </div>
  );
}

export default App;
