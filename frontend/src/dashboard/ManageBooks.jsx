import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {

  const [allbooks,setallbooks]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/allbooks").then(res=>res.json()).then(data=>setallbooks(data));
  },[])

  const handledelete=(id)=>{
    console.log(id);
    fetch(`http://localhost:3000/book/${id}`,{
      method:"DELETE",
    }).then(res=>res.json()).then(data=>{
      alert("Book deleted successfully!!!")
      // setallbooks(data);
    })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage your Books</h2>
      <table className="w-full border-collapse border lg:w-[1180px]">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800">
            <th className="px-4 py-2">No. of books</th>
            <th className="px-4 py-2">Book name</th>
            <th className="px-4 py-2">Author Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Prices</th>
            <th className="px-4 py-2">Edit or Manage</th>
          </tr>
        </thead>
        {
          allbooks.map((book,index) => <tbody className="divide-y" key={book._id}>
              <tr className="bg-white dark:bg-gray-900">
            <td className="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white">{index+1}</td>
            <td className="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white">{book.bookTitle}</td>
            <td className="px-4 py-2">{book.authorName}</td>
            <td className="px-4 py-2">{book.category}</td>
            <td className="px-4 py-2">$10.00</td>
            <td className="px-4 py-2">
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={()=>handledelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </td>
          </tr>
          </tbody> )
        }
      </table>
    </div>
  );
}

export default ManageBooks;
