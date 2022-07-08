import React, { useState } from 'react';
import Footer from '../Footer';

// Contact form based on online lessons from Module 20 UofR Coding Boot Camp

function Contact() {
  // set states for error messages and the form itself
  const [errorMessage, setErrorMessage] = useState('');
  // set the default value of form fields
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  // destructure formState
  const { name, email, message } = formState;

  // Validate text entered into fields
  function handleChange(e) {
    if (e.target.name === 'email') {
      // Validating e-mail against simple REGEX
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      }
    } else {
      // Checking to make sure the name or character is not null
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    // only set the form state if there have been no errors
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // a place holder function to handle the submit
  function handleSubmit(e) {
    e.prevent.Default();
    console.log(formState);
  }

  // The JSX (HTML) for the contact form
  return (
    <div>
      <section>
        <form id="contact-form" className="p-4">
          <div className="p-2">
            <label className="d-block" htmlFor="name">
              Name:
            </label>
            <input
              className="d-block"
              size="30"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="p-2">
            <label className="d-block" htmlFor="email">
              Email address:
            </label>
            <input
              className="d-block"
              size="40"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="p-2">
            <label className="d-block" htmlFor="message">
              Message:
            </label>
            <textarea
              className="d-block"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button
            className="submit-btn p-2 m-2"
            data-testid="submit"
            type="submit"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

// email validation function taken from REGEX Tutorial written by Mark Elliott for UofR Coding Boot Camp
function validateEmail(email) {
  var re = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  return re.test(String(email).toLowerCase());
}

export default Contact;
