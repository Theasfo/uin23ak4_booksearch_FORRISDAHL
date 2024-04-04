import React from "react";

const BookCard = ({ book }) => {
    const { title, first_publish_year, author_name, key: bookId, cover_i, amazon_id } = book;
    const coverImageUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : '/path/to/default/image.jpg'; 

    // Amazon URL
    const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(title + " book")}`;

    return (
        <div className="book-card">
            <img src={coverImageUrl} alt={title} />
            <h3>{title}</h3>
            <p>Forfatter: {author_name?.join(', ')}</p>
            <p>Første utgivelsesår: {first_publish_year}</p>
            <a href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">
                Søk på Amazon
            </a>
        </div>
    );
}

export default BookCard;
