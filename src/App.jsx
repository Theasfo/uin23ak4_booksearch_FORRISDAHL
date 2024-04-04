import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bookcard from './components/Bookcard';
import SearchResults from './components/SearchResults';
import Layout from './components/Layout';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=James+bond')
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.docs);
        setFilteredResults(data.docs);
      })
      .catch((error) => {
        console.error('Feil ved henting av data:', error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.length < 3) {
      setFilteredResults(searchResults);
      return;
    }
  
    const filtered = searchResults.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (book.author_name &&
          book.author_name.some((author) =>
            author.toLowerCase().includes(searchTerm.toLowerCase())
          )) ||
        String(book.first_publish_year).includes(searchTerm)
    );
    setFilteredResults(filtered);
  };
  
  

  return (
    <Layout>
      <div className="search-container">
        <input
          type="text"
          placeholder="Søk..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <SearchResults results={filteredResults} />
    </Layout>
  );
};

export default App;
