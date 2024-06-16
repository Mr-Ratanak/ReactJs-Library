import React from 'react';
import './BookList.css';
import { useGlobalContext } from '../../context';
import coverImg from '../../Image/cover_not_found.jpg';
import Loader from '../Loader/Loader';
import Book from './Book';
import Header from '../Header/Header';


// https://covers.openlibrary.org/b/id/240727-S.jpg
const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();

  const bookWithCovers = books.map((singlebook)=>{
    return {
      ...singlebook,
      id:(singlebook.id).replace("/work/", ""),
      cover_img: singlebook.cover_id ? `https://covers.openlibrary.org/b/id/${singlebook.cover_id}-L.jpg` : coverImg
    }
  });

  console.log(bookWithCovers);
  if(loading){
    return (
      <Loader />
    )
  }

  return (
    <>
    <Header />
    <section className='container'>
        <div className="section-title">
          <h3>{resultTitle}</h3>
        </div>
        <div className="booklist-content">
          {
            bookWithCovers.slice(0,30).map((item,index)=>{
              return (
                <Book key={index} {...item} />
              )
            })
          }
        </div>
    </section>
    </>
  )
}

export default BookList
