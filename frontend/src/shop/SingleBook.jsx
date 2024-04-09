import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookDetails from './BookDetails';

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={imageURL} alt={bookTitle} className='h-80 w-30' />
      <h2>{bookTitle}</h2>
     <h2><BookDetails book={{ _id, bookTitle, bookDescription }} /></h2>
    </div>
  );
};

export default SingleBook;
