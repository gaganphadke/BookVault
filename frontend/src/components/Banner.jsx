import React, { useState } from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedBook, setSearchedBook] = useState(null);
  const [noBookFound, setNoBookFound] = useState(false);

  const booksData = [
    {
      "_id": "660585efa6f8b0eb413bf937",
      "authorName": "R.F. Kuang",
      "imageURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1671336608l/62047984.jpg",
      "category": "Fiction",
      "bookDescription": "R.F. Kuang continues her astonishing ascent from genre specialist to literary sensation with Yellowface, a lacerating parable about the publishing industry itself. A combination of satire, metafiction, and slow-burn thriller, the book ultimately delivers a sly cultural critique concerning race and tokenism in the book business.",
      "bookTitle": "YellowFace",
      "bookPDFUrl": "https://www.goodreads.com/book/show/62047984-yellowface"
    },
    {
      "_id": "660586cda6f8b0eb413bf938",
      "authorName": "Meg Shaffer",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684817680i/62926992.jpg",
      "category": "Fiction",
      "bookDescription": "Lucy Hart knows better than anyone what it’s like to grow up without parents who loved her. In a childhood marked by neglect and loneliness, Lucy found her solace in books, namely the Clock Island series by Jack Masterson. Now a twenty-six-year-old teacher’s aide, she is able to share her love of reading with bright, young students, especially seven-year-old Christopher Lamb, who was left orphaned after the tragic death of his parents. Lucy would give anything to adopt Christopher, but even the idea of becoming a family seems like an impossible dream without proper funds and stability",
      "bookTitle": "The Wishing Game",
      "bookPDFUrl": "https://www.goodreads.com/book/show/62926992-the-wishing-game"
    },
    {
      "_id": "660a7c9e255ff917cb4d6578",
      "authorName": "Emily Henry ",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660145160i/61718053.jpg",
      "category": "Fiction",
      "bookDescription": "Harriet and Wyn have been the perfect couple since they met in college—they go together like salt and pepper, honey and tea, lobster and rolls. Except, now—for reasons they’re still not discussing—they don’t.",
      "bookTitle": "Happy Place",
      "bookPDFUrl": "https://www.goodreads.com/book/show/61718053-happy-place"
    },
    {
      "_id": "660a7d03255ff917cb4d6579",
      "authorName": "Ali Hazelwood ",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678378842i/60683957.jpg",
      "category": "YoungAdultFiction",
      "bookDescription": "Mallory Greenleaf is done with chess. Every move counts nowadays; after the sport led to the destruction of her family four years earlier, Mallory's focus is on her mom, her sisters, and the dead-end job that keeps the lights on. That is, until she begrudgingly agrees to play in one last charity tournament and inadvertently wipes the board with notoriousKingkiller Nolan Sawyer: current world champion and reigning Bad Boy of chess.",
      "bookTitle": "Check & Mate",
      "bookPDFUrl": "https://www.goodreads.com/book/show/61718053-happy-place"
    },
    {
      "_id": "660a7d9a255ff917cb4d657a",
      "authorName": "Leigh Bardugo",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648744814i/60652997.jpg",
      "category": "Fantasy",
      "bookDescription": "Leigh Bardugo is back on top with Hell Bent, the winner of this year’s Fantasy category. Not coincidentally, the book is the sequel to Ninth House, 2019’s winner in Fantasy. Bardugo’s beloved series has established a new trajectory for dark academia books, promising Ivy League hopefuls a world of secret societies, occult rituals, and interdimensional portals.",
      "bookTitle": "Hell Bent",
      "bookPDFUrl": "https://www.goodreads.com/book/show/60652997-hell-bent"
    },
    {
      "_id": "660a7dfc255ff917cb4d657b",
      "authorName": "Henry Winkler",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677855868i/65215014.jpg",
      "category": "Humour",
      "bookDescription": "Henry Winkler, launched into prominence by his role as “The Fonz” in the beloved Happy Days, has transcended the role that made him who he is. Brilliant, funny, and widely-regarded as the nicest man in Hollywood (though he would be the first to tell you that it’s simply not the case, he’s really just grateful to be here), Henry shares in this achingly vulnerable memoir the disheartening truth of his childhood, the difficulties of a life with severe dyslexia, the pressures of a role that takes on a life of its own, and the path forward once your wildest dream seems behind you.",
      "bookTitle": "Being Henry: The Fonz . . . and Beyond",
      "bookPDFUrl": "https://www.goodreads.com/book/show/65215014-being-henry"
    }
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const foundBook = booksData.find(book => book.bookTitle.toLowerCase() === searchQuery.toLowerCase());
    if (foundBook) {
      setSearchedBook(foundBook);
      setNoBookFound(false);
    } else {
      setSearchedBook(null);
      setNoBookFound(true);
    }
  };

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-12 py-40 w-full' style={{ paddingLeft: '10%' }}>
        {/* left side */}
        <div className='md:w-1/2 space-y-8'>
          <h2 className='text-6xl font-bold leading-snug text-black'>
            Buy and Sell your books
            <span className='text-blue-700'> for the best prices</span>
          </h2>
          <p className='md:w-4/5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis et distinctio maxime perspiciatis tempore eligendi, minima laboriosam placeat ipsa enim beatae nobis eos nam aliquam necessitatibus animi? Sit, aliquam debitis?
          </p>
          <div className='flex items-center gap-4'>
            <input
              type="search"
              name="search"
              id="search"
              placeholder='Search a book'
              className='py-2 px-2 rounded-s-sm outline-none'
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {searchedBook && (
            <div className="mt-8 p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-bold mb-2">Searched Book: {searchedBook.bookTitle}</h3>
              <p>Author: {searchedBook.authorName}</p>
              <p>Category: {searchedBook.category}</p>
              <p>Description: {searchedBook.bookDescription}</p>
              <p>Availability: <span className={searchedBook ? 'text-green-600' : 'text-red-600'}>{searchedBook ? 'Available' : 'Not Available'}</span></p>
            </div>
          )}
          {noBookFound && (
            <div className="mt-8 p-4 bg-gray-100 rounded">
              <p className="text-lg font-bold mb-2">No matching book found.</p>
              <p>Sorry, we couldn't find any book matching your search query.</p>
            </div>
          )}
        </div>

        {/* right side */}
        <div>
            <BannerCard/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
