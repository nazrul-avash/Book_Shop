import React, { useContext } from 'react';
import { BookContext } from './BookContext';
import BookCard from './BookCard';

const WishList = () => {
        const {wishListBook} = useContext(BookContext);
        return (
            <div>
                {wishListBook.map((book)=> (<BookCard book={book}></BookCard>))}
            </div>
        );
 
};

export default WishList;