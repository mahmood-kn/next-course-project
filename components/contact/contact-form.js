import classes from './contact-form.module.css';
import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [enteredEmail, setenteredEmail] = useState('');
  const [enteredName, setenteredName] = useState('');
  const [enteredMessage, setenteredMessage] = useState('');

  const sendMessageHandler = (e) => {
    e.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(e) => setenteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(e) => setenteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            required
            value={enteredMessage}
            onChange={(e) => setenteredMessage(e.target.value)}
            rows='5'
            id='message'></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
