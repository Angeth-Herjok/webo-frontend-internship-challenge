import React from "react"
import './style.css';
import { FaLinkedin, FaFacebookMessenger, FaTwitter,  FaTwitch } from 'react-icons/fa';

const Footer = () => {
  return (
    <div >
        <div className="footer-background">
        <div className="footer">
        <div className="footer-logo">
            <h1>AR Shakir</h1>
            <p>Finance helps companies <br/>manage payments easily.</p>
            <div className="footer-icon">
                <FaLinkedin /> 
                <FaFacebookMessenger /> 
                <FaTwitter /> 
                < FaTwitch /> 
            </div>
        </div>

        <div className="footer-company">
            <h1>Company</h1>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Pricing</p>
        </div>

        <div className="footer-resources">
            <h1>Resources</h1>
            <p>Proposal Template</p>
            <p>Invoice Template</p>
            <p>Tuturoial</p>
            <p>How to write a contract</p>
        </div>

        <div className="newsletter">
            <h1>Join Our Newsletter</h1>
            <div className="two-color-button-container">
              <button>Your email address</button>
              <button>Subscribe</button>
            </div>
            <p>*  Will send you weekly updates for your better <br/>finance management.</p>
        </div>

        </div>

        </div>

        <div className="copyright">
            <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
        </div>

    </div>
  );
};

export default Footer;
