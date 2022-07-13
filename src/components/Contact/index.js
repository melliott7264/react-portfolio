import React, { useState } from 'react';
import Footer from '../Footer';
import emailjs from '@emailjs/browser';

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

  // On any change in a form field
  function handleChange(e) {
    // If an error message has been set, clear it.
    if (errorMessage) {
      setErrorMessage('');
    }
    // Set the state of the form field (e.target.name) to the current value (e.target.value) of the form field
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  // This function validates the contents of the contact form fields, and sends and e-mail to the administrator.
  function handleSubmit(e) {
    e.preventDefault();
    // This regex validates the e-mail
    const regex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    const isValid = regex.test(String(email).toLowerCase());
    if (!isValid) {
      setErrorMessage('Please enter a valid e-mail address.');
      return;
      // Check for a name with content
    } else if (!name) {
      setErrorMessage('Please enter a name.');
      return;
      // Check for a message with content
    } else if (!message) {
      setErrorMessage('Please enter a message.');
      return;
    }
    // Send an e-mail to the administrator and log the results
    emailjs
      .send(
        'service_3q64na3',
        'template_a5u2ohd',
        formState,
        'XizeVVxmubxQXC59c'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setErrorMessage('Your message has been sent!');
        },
        (err) => {
          console.log('FAILED...', err);
          setErrorMessage('There was a problem sending your message.');
        }
      );

    // clear the form fields
    setFormState({ name: '', email: '', message: '' });
  }

  // The JSX (HTML) for the contact form
  return (
    <div>
      <section>
        <form onSubmit={handleSubmit} id="contact-form" className="p-4">
          <div className="p-2">
            <label className="d-block" htmlFor="name">
              Name:
            </label>
            <input
              className="d-block"
              size="30"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
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
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="p-2">
            <label className="d-block" htmlFor="message">
              Message:
            </label>
            <textarea
              className="d-block"
              name="message"
              value={message}
              onChange={handleChange}
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
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
