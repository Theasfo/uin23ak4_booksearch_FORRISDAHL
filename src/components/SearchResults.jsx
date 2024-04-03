import React from "react";
import Bookcard from "./Bookcard";

const SearchResults = ({results}) => {
    return(
        <div className="search-results">
            {results.map((book) => (
                <Bookcard key={book.key} book={book}/>
            ))}
        </div>
    )
}

export default SearchResults