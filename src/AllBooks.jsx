import React from 'react';
import { use } from 'react';
import Books from './Books';
import BookCard from './BookCard';
const booksPromise = fetch('/booksData.json').then(res =>res.json());
const AllBooks = () => {
    const bookData = use(booksPromise);
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='font-bold mb-4 text-center'>Books</h1>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
             {
                bookData.map((book)=>{
                     return <BookCard book={book}></BookCard>
                })
            }
           </div>
        </div>
    );
};

export default AllBooks;