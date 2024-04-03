import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Bookcard from './components/Bookcard'
import SearchResults from './components/SearchResults'
import Layout from './components/Layout'

const App = () => {
  const [searchresults, setsearchResults] = useState([]);
  const [filderedResults, setFilteredResults] = useState([])

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=James+bond')
      .then((response) => response.json())
      .then((data) => {
        setsearchResults(data.docs);
        setFilteredResults(data.docs);
      })
      .catch((error) => {
        console.error('Feil ved henting av data:', error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredResults(SearchResults);
      return
    }

    const filtered = searchResults.filter(
      (book) => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(book.first_publish_year).includes(searchTerm)
    );
    setFilteredResults(filtered);
  }

  return (
    <Layout>
      <SearchResults results={searchresults} />
    </Layout>
  );
};
  

export default App;