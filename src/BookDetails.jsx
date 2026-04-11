import React from 'react';
import { useLoaderData} from 'react-router-dom';
import BookDetailsCard from './BookDetailsCard';

const BookDetails = () => {
    const expectedBook = useLoaderData();
     
    return (
        <div>
            <BookDetailsCard expectedBook={expectedBook}></BookDetailsCard>     
        </div>
    );
};

export default BookDetails;