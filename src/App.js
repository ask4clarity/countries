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

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
    const searchResults = allCountries.filter(country => 
    country.name.common.toLowerCase().includes(search.toLowerCase()))
    setCountries(searchResults)
  }


  return (
    <div>
    <Search search={search} handlesearch={handleSearch}/>
    <Results countries={countries}/>
    </div>
  );
}

export default App;
