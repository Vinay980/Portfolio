import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:vinay01mahto@gmail.com" data-cursor="disable">
                vinay01mahto@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918864094101" data-cursor="disable">
                +91 8864094101
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Vinay980"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/vinay980/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/8864094101"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Whatsapp <MdArrowOutward />
            </a>
            
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vinay Kumar Mahto</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Vinay Kumar Mahto. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
