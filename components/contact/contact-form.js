import classes from './contact-form.module.css';
import { useState, useEffect } from 'react';
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

const ContactForm = () => {
  const [enteredEmail, setenteredEmail] = useState('');
  const [enteredName, setenteredName] = useState('');
  const [enteredMessage, setenteredMessage] = useState('');
  const [requestStatus, setrequestStatus] = useState();
  const [requestError, setrequestError] = useState();
  useEffect(() => {
    if ((requestStatus === 'success') | (requestStatus === 'error')) {
      const timer = setTimeout(() => {
        setrequestStatus(null);
        setrequestError(null);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);
  const sendMessageHandler = async (e) => {
    e.preventDefault();

    setrequestStatus('pending');
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setrequestStatus('success');
      setenteredMessage('');
      setenteredName('');
      setenteredEmail('');
    } catch (err) {
      setrequestStatus('error');
      setrequestError(err.message);
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message',
      message: 'Your message is on its way!',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Message sent successfully!',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
