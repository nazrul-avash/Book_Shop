import React, { useContext } from 'react';
import { BookContext } from './BookContext';
import BookCard from './BookCard';

const ReadList = () => {
      const {storedBook} = useContext(BookContext);
    return (
        <div>
            {storedBook.map((book)=> (<BookCard book={book}></BookCard>))}
        </div>
    );
};

export default ReadList;