import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../component/Header/Header';

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home
