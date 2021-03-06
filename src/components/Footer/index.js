import React from 'react';

// This component is called at the bottom of each(About, Projects, Contact, and Resume) other page component to create the page footer.
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
            href="https://stackoverflow.com/users/17751312/mark-elliott"
          >
            Stack Overflow
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
