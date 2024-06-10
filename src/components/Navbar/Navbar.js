import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({isChecked}) => {
  return(
  <nav id={isChecked ? 'navigationBar' : ''} className={isChecked ? 'proN' : 'nonN'}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/view-all">View All Animals</Link></li>
      <li><Link to="/add-new">Add New Animal</Link></li>
    </ul>
  </nav>
)};

export default Navbar;
