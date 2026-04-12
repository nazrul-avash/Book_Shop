import React, { useContext } from 'react';
import { BookContext } from './BookContext';

const BookDetailsCard = ({expectedBook}) => {
    const {handleMarkAsRead,storedBook,handleWishList,} = useContext(BookContext);


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img className='w-full max-w-xs mx-auto'
                src={expectedBook.image}
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                  <div className='flex gap-2'>
            {expectedBook.tags.map((tag)=>{
                return (<div className="badge bg-green-100 p-3 text-green-500">{tag}</div>)
            })}
            
          </div>
        <div className="card-body">
            <h2 className="card-title">
            {expectedBook.bookName}
         
            </h2>
            <p>By: {expectedBook.author}</p>

           <div className='flex gap-5'>
             <button className="btn btn-primary" onClick={()=>handleMarkAsRead(expectedBook)}>Read</button>
            <button className="btn btn-primary"onClick={()=>handleWishList(expectedBook)}>Wishlist</button>
           </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookDetailsCard;