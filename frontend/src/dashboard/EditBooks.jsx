import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import {useLoaderData,useParams} from 'react-router-dom'

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL}=useLoaderData();
  const bookcat=[
    "Fiction",
    "NonFiction",
    "Mystery",
    "Horror",
    "Action",
    "Drama",
    "Adventure",
    "ScienceFiction",
    "Fantasy",
    "History",
    "Children",
    "Travel",
    "Religion"
  ]

  const [selectedbookcat,setselectedbookcat]=useState(bookcat[0])

  const handlechange=(event)=>{
    // console.log(event.target.value);
    setselectedbookcat(event.target.value);
  }

  const handleedit=(event)=>{
    event.preventDefault();
    const form=event.target;

    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.category.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;
    const bookobj={
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }
    console.log(bookobj);

    //send data to db
    fetch(`http://localhost:3000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(bookobj)
    }).then(res=>res.json()).then(data=>{
      alert("Book Updated Successfully!!!");
    })

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit a Book</h2>
      <form onSubmit={handleedit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
     <div className='flex gap-8'>
     <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Enter book name" defaultValue={bookTitle} required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" type="text" name='authorName' placeholder="Enter author name" defaultValue={authorName} required />
      </div>

     </div>
     <div className='flex gap-8'>
     <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" type="url" name='imageURL' placeholder="Enter the url" defaultValue={imageURL} required />
      </div>
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select id='inputState' name='category' className='w-full rounded' value={selectedbookcat} onChange={handlechange}>
          {
         bookcat.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </select>
      </div>

     </div>

     <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Enter book description" required rows={6} defaultValue={bookDescription} className='w-full' />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" type="url" name='bookPDFURL' placeholder="Enter the book pdf url" defaultValue={bookPDFURL} required />
      </div>

<Button type='submit' className='bg-teal-400 text-black mt-5 justify-center'>Update</Button>
    </form>
    </div>
  )
}

export default EditBooks