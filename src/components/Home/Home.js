import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = ({isChecked}) => (
  <div className={isChecked ? 'proH' : 'nonH'}>
    <Navbar isChecked={isChecked}/>
    <main role="main">
      <header role="banner">
        <h2 id={isChecked ? 'homePageTitle' : ''}>Welcome to the Zoo Management App</h2>
      </header>
      <section role="region" aria-labelledby="section-heading">
        <p id={isChecked ? 'homePageDescription' : ''}>This application helps you manage your animals effectively. Use the navigation links to view or add animals.</p>
      </section>
      <img id={isChecked ? 'homePageImage' : ''} src="National-Zoo.jpg" alt={isChecked ? "Description of the image" : ''} width='600px' className='image'/>
    </main>
  </div>
);

export default Home;
