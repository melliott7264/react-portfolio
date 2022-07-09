import React from 'react';

// This component creates the header and navigation bar that is displayed at the top of each page.
// Through the passed method handlePageChange, it activates all the other pages when a page option is clicked.
function Navigation({ currentPage, handlePageChange }) {
  return (
    <header>
      <div>
        <h1 id="header">Mark Elliott</h1>
      </div>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={
                currentPage === 'About' ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={
                currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={
                currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={
                currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
