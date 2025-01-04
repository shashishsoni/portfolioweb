import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/contact.css';

const ContactMenu = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('zZjVWPAsk3X_PLLNJ');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        'service_zvosz7i',
        'template_nmd4rhb', 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'shashish',
        }
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">~/contact/message</div>
        </div>

        <div className="contact-content">
          <h1 className="glitch-text">Contact_Me</h1>

          <form onSubmit={handleSubmit} className="contact-form">
            {status.error && (
              <div className="error-message">
                {status.error}
              </div>
            )}
            {status.submitted && (
              <div className="success-message">
                Message sent successfully!
              </div>
            )}
            
            <div className="form-group">
              <label>
                <span className="terminal-prompt">&gt;</span> Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label>
                <span className="terminal-prompt">&gt;</span> Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label>
                <span className="terminal-prompt">&gt;</span> Subject:
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>

            <div className="form-group">
              <label>
                <span className="terminal-prompt">&gt;</span> Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.submitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={status.submitting}
            >
              <span className="terminal-prompt">&gt;</span>
              {status.submitting ? 'Sending...' : 'Send_Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMenu;