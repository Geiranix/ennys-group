import React, { useRef, useState,useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../assets/styles/contact.css';


const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

if (process.env.NODE_ENV === 'development') {
  console.log('EmailJS envs:', { SERVICE_ID, TEMPLATE_ID, USER_ID });
}

export default function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');
  const [errors, setErrors] = useState({}); // only updated on submit

  useEffect(() => {
  if (USER_ID) {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY.trim());

  } else {
    console.warn('Missing EmailJS PUBLIC_KEY');
  }
}, []);
useEffect(() => {
  if (!submitted) return;
  const t = setTimeout(() => setSubmitted(false), 4000);
  return () => clearTimeout(t);
}, [submitted]);

  const validate = (values) => {
    const e = {};
    if (!values.from_name?.trim()) e.from_name = 'Name is required';
    if (!values.reply_to?.trim()) e.reply_to = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.reply_to))
      e.reply_to = 'Email address is invalid';
    if (!values.subject?.trim()) e.subject = 'Subject is required';
    if (!values.message?.trim()) e.message = 'Message is required';
    return e;
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setServerError('');

  const formEl = e.currentTarget;            
  
  const values = Object.fromEntries(new FormData(formEl).entries());
  const v = validate(values);
  setErrors(v);
  if (Object.keys(v).length) return;

  try {
    setIsSending(true);
    const res = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formEl,                                   
      USER_ID                                
    );
    console.log('EmailJS OK:', res.status, res.text);
    setSubmitted(true);
    formEl.reset();
    setErrors({});
  } catch (err) {
    console.error('EmailJS error:', err);
    setServerError(err?.text || err?.message || 'Failed to send message.');
  } finally {
    setIsSending(false);
  }
};


  
  const clearError = (e) => {
    const name = e.target.name;
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <section className="contact" id="contact">
      <h2>How can we help you?</h2>

      {submitted && (
        <p className="success-message">Thank you for reaching out! We’ll get back to you soon.</p>
        
      )}
      {!!serverError && <p className="error-text">{serverError}</p>}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="from_name">Name*</label>
          <input
            id="from_name" name="from_name" type="text"
            onInput={clearError}
            className={errors.from_name ? 'error' : ''}
          />
          {errors.from_name && <small className="error-text">{errors.from_name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="reply_to">Your Email*</label>
          <input
            id="reply_to" name="reply_to" type="email"
            onInput={clearError}
            className={errors.reply_to ? 'error' : ''}
          />
          {errors.reply_to && <small className="error-text">{errors.reply_to}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject*</label>
          <input
            id="subject" name="subject" type="text"
            onInput={clearError}
            className={errors.subject ? 'error' : ''}
          />
          {errors.subject && <small className="error-text">{errors.subject}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message" name="message" rows="5"
            onInput={clearError}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <small className="error-text">{errors.message}</small>}
        </div>

        <button type="submit" className="submit-btn" disabled={isSending}>
          {isSending ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
