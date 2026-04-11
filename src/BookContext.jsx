import React, { createContext, useState } from 'react';

export const BookContext= createContext(); 

const BookProvider = ({children}) => {
    const [storedBook, setStoredBook] = useState([]);
    function handleMarkAsRead(currentBook){
        {console.log(storedBook)}
        const isExist = storedBook.find((book)=>book.bookId === currentBook.bookId);
       
        if(isExist){
            alert("Already Exist");
        }
        else{
            setStoredBook([...storedBook,currentBook]);
            alert("Added to the list");
        }
    }
    const data = {storedBook,setStoredBook,handleMarkAsRead};
    return (
        <BookContext.Provider value={data}>{children}</BookContext.Provider>
    );
};

export default BookProvider;