import React from "react";

const BookCard = ({ book }) => {
    const { title, first_publish_year, author_name, key: bookId, cover_i, id_amazon, ratings_average } = book;
    const coverImageUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : '/path/to/default/image.jpg'; 

    // Amazon URL
    const amazonSearchUrl = `https://www.amazon.com/s?k=${id_amazon}`;
    console.log("id: ", id_amazon)
    return (
        <div className="book-card">
            <img src={coverImageUrl} alt={title} />
            <h3>{title}</h3>
            <li>Forfatter: {author_name?.join(', ')}</li>
            <li>Første utgivelsesår: {first_publish_year}</li>
            <li>Gjennomsnittlig rating: {book.ratings_average || "N/A"}</li>
            <a href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">
                Søk på Amazon
            </a>
        </div>
    );
}

export default BookCard;
