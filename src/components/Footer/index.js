import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container" id="contact-links">
        <div className="row align-items-center">
          <a
            className="col text-center pt-2"
            href="https://github.com/melliott7264"
          >
            GitHub
          </a>
          <a
            className="col text-center pt-2"
            href="https://www.linkedin.com/in/markelliottva/"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="pb-2 text-center">
        &copy; 2022 Mark Elliott All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
