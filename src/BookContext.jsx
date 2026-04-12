import React, { createContext, useState } from 'react';

export const BookContext= createContext(); 

const BookProvider = ({children}) => {
    const [storedBook, setStoredBook] = useState([]);
    const [wishListBook, setWishListBook] = useState([]);
    function handleMarkAsRead(currentBook){
      
        const isExist = storedBook.find((book)=>book.bookId === currentBook.bookId);
       
        if(isExist){
            alert("Already Exist");
        }
        else{
            setStoredBook([...storedBook,currentBook]);
            alert("Added to the list");
        }
    }

    function handleWishList(currentBook){
        const isExistInReadList = storedBook.find((book)=>book.bookId === currentBook.bookId);
        const isExist = wishListBook.find((book)=>book.bookId === currentBook.bookId);
       if(isExistInReadList){
        alert("Already in the Read List");
        return;
       }
        if(isExist){
            alert("Already Exist in the Wish List");
        }
        else{
            setStoredBook([...wishListBook,currentBook]);
            alert("Added to the Wish List");
        }
    }
    const data = {storedBook,setStoredBook,handleMarkAsRead,wishListBook,setWishListBook,handleWishList};
    return (
        <BookContext.Provider value={data}>{children}</BookContext.Provider>
    );
};

export default BookProvider;