import React, {useState} from "react";

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Søk etter bok..."
            value={searchTerm}
            onChange={handleChange}/>
            <button type="submit">Søk</button>
        </form>
    )
}

export default SearchBar