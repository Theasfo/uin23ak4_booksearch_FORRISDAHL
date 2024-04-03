import React, {useState} from "react";

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://openlibrary.org/search.json?q=James+bond").then
        ((response) => response.json()).then
        ((json) => {
            const results = json.filter((book) => {
                return (
                    title
                ) 
            })
             
            
            });
    }

    const handleChange = (value) => {
        setInput (value)
        fetchData(value)
    }

    return (
    <div className="input-wrapper">
        <input placeholder="Søk..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        />
    </div>
    )
}