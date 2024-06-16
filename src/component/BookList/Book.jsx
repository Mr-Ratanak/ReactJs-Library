import React from 'react';
import './BookList.css';
import testImage from '../../Image/cover_not_found.jpg';
import { Link } from 'react-router-dom';


const Book = (books) => {

  return (
      <div className="sub-box-item">
          <Link to={`/book/${books.id.replace("/works/","")}`} {...books} className="image"><img src={books.cover_img ? books.cover_img : testImage} alt="img" /></Link>
      <div className="content">
        <Link to={`/book/${books.id.replace("/works/","")}`} {...books}>
          <p className='title'>{books.title ? (books.title.length <= 30 ? books.title : `${books.title.substring(0, 20)}...`) : null}</p>
        </Link>
        <p className="author">Author: <span>{books.author ? (books.author.length <= 30 ? books.author.join(", ") : `${books.author.substring(0, 20)}...`) : null}</span></p>
        <p className="total_edition">Total Edition: <span>{books.edition_count}</span></p>
        <p className="first_pub">first public year: <span>{books.first_publish_year}</span></p>
      </div>
      </div>
  )
}

export default Book
