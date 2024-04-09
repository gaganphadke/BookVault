// Shop.jsx
import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/allbooks")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center text-black-400'>Books</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map(book => (
          <Card key={book._id}>
            <img src={book.imageURL} alt='' className='h-96'></img>
            <h5 className='text-2xl front-bold tracking-tight text-gray-900 dark:text-white'>
              <p className='text-center justify-center font-semibold'>
                {book.bookTitle}
              </p>
            </h5>
            <p className='font-normal text-gray-700 darl:text-white-400 ml-5'>
              <p>
                {book.bookDescription.split(' ').slice(0, 30).join(' ')}
                {book.bookDescription.split(' ').length > 30 ? '...' : ''}
              </p>
            </p>
            {/* Link to BookDetails with book ID as parameter */}
            <button className='sbg-blue-700 font-semibold text-balck py-2 rounde hover:text-blue-500'>
              {/* <Link to={`/book/${book._id}`}> */}
                Buy Now
              {/* </Link> */}
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
