import React from "react";
import "./Contact.css";



const Contact = () => {
  
  return (
    <div className="contact-page">
      {/* Left Section: Contact Details */}
      <div className="contact-card">
      <div className="map-background">
      <iframe
  
  className="blur-map"
  style={{ border: 0, width:"100%",
    height:"560px"}}
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps?q=Manhattan,New+York&output=embed" />
      </div>
        <h1>
          Let's <span className="highlight">Talk</span>
        </h1>
        <ul>
          <li>
            <span className="icon">📍</span>
            <span className="info">
              <strong>Location:</strong> Manhattan, NY
            </span>
          </li>
          
          <li>
            <span className="icon">📧</span>
            <span className="info">
              <strong>Email (Work):</strong> udhav355@gmail.com
            </span>
          </li>
          <li>
            <span className="icon">📞</span>
            <span className="info">
              <strong>Phone:</strong> +1 (551) 359 1588
            </span>
          </li>
        </ul>

        {/* Social Media Icons */}
       
      </div>

      {/* Right Section: Contact Form */}
      <div className="contact-card">
        <h2>
          Send me a <span className="highlight">Message</span>
        </h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Type your email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Map Background */}
      
    </div>
  );
};

export default Contact;
