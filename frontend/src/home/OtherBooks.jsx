import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/allbooks").then(res=>res.json()).then(data=>setBooks(data.slice(4,12)));
    },[])
  return (
    <div>
        <BookCards  books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default OtherBooks