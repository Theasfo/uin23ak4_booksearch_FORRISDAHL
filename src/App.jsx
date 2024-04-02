import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchBar } from './components/searchBar'

function App() {
  return (
  <div className='App'>
    <div className="search-bar">
       <SearchBar/>
       <div>SearchResults</div>
      </div>
    </div>
  )
}

export default App;