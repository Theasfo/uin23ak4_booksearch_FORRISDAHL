import React from "react";

const Bookcard = ({ book }) => {
    return(
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>Forfatter: {book.author_name?.join(',')}</p>
            <p>Første utgivelsesår: {book.first_publish_year}</p>
            <p>Gjennomsnittlige rating: {book.avarage_rating}</p>
            <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer">
                Søk på Amazon</a>
        </div>
    )
}

export default Bookcard