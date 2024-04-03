import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/searchBar'

function App() {
  const [results, setResults] = useState([]);

  return (
  <div className='App'>
    <div className="search-bar">
       <SearchBar setResults={setResults}/>
       <div>SearchResults</div>
      </div>
    </div>
  )
}

export default App;