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

  // Validate text entered into fields
  function handleChange(e) {
    if (e.target.name === 'email') {
      // Validating e-mail against simple REGEX
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Please enter a valid e-mail address.');
      }
    } else {
      // Checking to make sure the name or character is not null
      if (!e.target.value.length) {
        setErrorMessage(`Please enter your ${e.target.name}.`);
      } else {
        setErrorMessage('');
      }
    }
    // only set the form state if there have been no errors
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // a place holder function to handle the submit - will add code to send to gmail API later on
  function handleSubmit(e) {
    e.prevent.Default();
    console.log('Contact Form Information has been Submitted!');
    console.log(formState);
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
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
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
        <div className="container">
          <div className="row align-items-center contact-info">
            <span className="col text-center">
              <strong>
                <a href="mailto:markelliottva@gmail.com">
                  markelliottva@gmail.com
                </a>
              </strong>
            </span>
            <span className="col text-center">
              <strong>
                <a href="tel:804-746-8288">(804)746-8288</a>
              </strong>
            </span>
          </div>
        </div>
        <div>
          <p className="text-center">
            Please note that this form is not fully implemented at this time.
            Please use the e-mail address and phone number above to contact me.
          </p>
        </div>
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
