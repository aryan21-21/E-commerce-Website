import React, { useState } from 'react';
import '../Contect/app.css'; // Don't forget to create this file
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost/contact-api/submit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.text();
      alert(data);
    } catch (error) {
      alert('Error sending data');
      console.error(error);
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>We are here to help you with any questions or concerns. Feel free to reach out.</p>
      </div>

      <div className="contact-info">
        <div className="info-card">
          <span><IoLocationOutline/></span>
          <h4>102 Street 2714 Donavan</h4>
          <p>We are available for your queries .</p>
        </div>
        <div className="info-card">
          <span><IoCallOutline/></span>
          <h4>+02 123 647 818</h4>
          <p>We’re happy to assist you anytime.</p>
        </div>
        <div className="info-card">
          <span><IoMailOutline/ ></span>
          <h4>info@shopify.com</h4>
          <p>Feel free to contact us for any questions or support.</p>
        </div>
      </div>

      <div className="form-box">
        <h3>Send Us</h3>
        <p>  We’re here to help with any questions or support you need. Feel free to contact us anytime.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group-row">
            <input type="text" name="name" placeholder="Your Name*" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email*" onChange={handleChange} required />
          </div>
          <input type="text" name="subject" placeholder="Subject*" onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Your Message*" onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
