import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"; // Custom CSS for styling
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

class Contact extends React.Component
{
    render()
    {
        return(
            <>
             <Header/>
             <div className="contact-container">
        <div className="contact-details">
          <h3><FaMapMarkerAlt /> Office Address</h3>
          <p>[Your Address Here]</p>

          <h3><FaPhone /> Call Us</h3>
          <p>[Your Phone Number Here]</p>

          <h3><FaEnvelope /> Email Us</h3>
          <p>[Your Email Here]</p>

          <h3><FaClock /> Office Open</h3>
          <p>Mon - Sat (09AM - 7PM)</p>
        </div>

        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" className="form-control" />
              <input type="email" placeholder="Your Email" className="form-control" />
            </div>
            <input type="text" placeholder="Your Subject" className="form-control" />
            <textarea placeholder="Write Your Message" className="form-control" rows="4"></textarea>
            <button type="submit" className="btn btn-dark">
              SEND MESSAGE <FaPaperPlane className="ml-2" />
            </button>
          </form>
        </div>
      </div>
             <Footer/>

            </>
        )
    }
}

export default Contact