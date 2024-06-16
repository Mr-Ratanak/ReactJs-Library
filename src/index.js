import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './component/BookList/BookList';
import BookDetail from './component/BookDetail/BookDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/book' element={<BookList />}></Route>
            <Route path='/book/:id' element={<BookDetail />}></Route>
        </Routes>
      </BrowserRouter>
  </AppProvider>
);
