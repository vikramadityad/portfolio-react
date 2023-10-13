import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }

    
    if (name && email && validateEmail(email)) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section className="contact">
      <h2 className="title">Contact</h2>
      <div className="contact-description">
      I would love to hear about your project and how I could help. Please fill in the form, or contact me at <a href="mailto:vikramd@duck.com" className="contact">vikramd@duck.com</a> or <span className="contact">(506)-334-5555</span>. I’ll get back to you as soon as possible.
      </div>
      <div className="contact-form-container">
        <form className="contact-form-group" onSubmit={handleSubmit}>
          <label className="contact-form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="contact-form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
           {nameError && <p className="error">{nameError}</p>}
          <label className="contact-form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="contact-form-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="contact-form-error">{emailError}</p>}
          <label className="contact-form-label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="contact-form-input"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="contact-form-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};


export default Contact;
