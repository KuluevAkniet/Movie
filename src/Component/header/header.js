import React from 'react';
import './header.css';

const header = () => {
    return (
        <header className='header'>
      <nav className="#1e88e5 blue darken-1 nav">
  <div className="nav-wrapper">
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="collapsible.html">Movies</a></li>
      </ul>
    </div>
  </nav>  
        </header>
    );
};

export default header;