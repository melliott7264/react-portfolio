import React, { useState } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import Navigation from '../Navigation';

function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Navigation>
      {renderPage()}
    </div>
  );
}

export default Header;
