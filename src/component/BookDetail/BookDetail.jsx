import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import coverImg from '../../Image/cover_not_found.jpg';
import Loader from '../Loader/Loader';
import { IoArrowBack } from "react-icons/io5";
import './BookDetail.css';


const URL = "https://openlibrary.org/works/";

const BookDetail = () => {
  const {id} =useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true);
    async function getBookDetails(){
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found!",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No author places found!",
            subject_times: subject_times ? subject_times.join(", ") : "No subject time found!",
            subjects: subjects ? subjects.join(", ") : "No subject found!"
          };
          setBook(newBook);
        }else{
          setBook(null);
        }
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  },[id]);

  if(loading){
    return (<Loader />)
  }

  return (
    <>
      <div className="container book-detail">
        <button type='button' onClick={()=>{navigate('/book')}} className='flex-btn'>
          <IoArrowBack size={30} /> <span>Go Back</span>
        </button>
        <div className="wrap-book">
          <div className="image"><img src={book?.cover_img} alt="img" /></div>
            <div className="book-info">
              <h5 className='title'><span>{book?.title}</span></h5>
              <p className="book-description"><span className='fw-3'>{book?.description}</span></p>
              <p className='subject-places'>Subject places: <span>{book?.subject_places}</span></p>
              <p className="subject-times">Subject times: <span>{book?.subject_times}</span></p>
              <p className="subjects">Subject: <span>{book?.subjects}</span></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default BookDetail
