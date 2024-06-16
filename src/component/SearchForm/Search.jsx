import React, { useEffect, useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import './Search.css';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(()=> searchText.current.focus(),[]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please inter something...");
    }else{
      setSearchTerm(searchText.current.value);
    }
    navigate('/book');
  }

  return (
    <form onSubmit={handleSubmit} className='main-box'>
       <div className="wrap-box">
            <input ref={searchText} type="search" className='search-box' placeholder='Search for books ...' />
            <button onClick={handleSubmit} type='submit' className="search-btn"><FaSearch size={'20'} /></button>
       </div>
    </form>
  )
}

export default Search
