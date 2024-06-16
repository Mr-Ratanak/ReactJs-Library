import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import aboutImage from '../../Image/about-img.jpg';
import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <section className="about">
          <div className="image">
            <img src={aboutImage} alt="" />
          </div>
          <div className="content">
            <h2>About Docs Books</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum aliquam doloremque eligendi, minus iste consectetur aperiam accusantium, soluta aut ea temporibus tempora cupiditate nesciunt tenetur facere enim quas debitis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum aliquam doloremque eligendi, minus iste consectetur aperiam accusantium, soluta aut ea temporibus tempora cupiditate nesciunt tenetur facere enim quas debitis?</p>
          
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
