import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    return (
        <div>
            <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm p-4">
        <figure className='w-full bg-base-200 p-4'>
            <img className='h-48 rounded-2xl' 
            src={book.image}
            alt="Shoes" />
        </figure>
          <div className='flex gap-2'>
            {book.tags.map((tag)=>{
                return (<div className="badge bg-green-100 p-3 text-green-500">{tag}</div>)
            })}
            
          </div>
        <div className="card-body">
            <h2 className="card-title">
            {book.bookName}
         
            </h2>
            <p>By: {book.author}</p>
            <div className="card-actions justify-end border-t border-dashed border-gray-300 flex">
                <p>{book.category}</p>
                <p className='flex items-center gap-2'>{book.rating} <FaRegStar /></p>
            </div>
        </div>
        </Link>
        </div>
    );
};

export default BookCard;