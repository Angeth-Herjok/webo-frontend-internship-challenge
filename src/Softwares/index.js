import React from "react";
import { FaCheckCircle } from 'react-icons/fa';
import './style.css';

const Softwares = () => {
  return (
    <div>
       <h1>Over 32k+ software businesses growing with AR Shakir</h1>
      <div className="company-list">
        <img src="/Images/zeppelian.png"></img>
        <img src="/Images/oracle.png"></img>
        <img src="/Images/mopheus.png"></img>
        <img src="/Images/sumsung.png"></img>
        <img src="/Images/monday.png"></img>
        <img src="/Images/segment.png"></img>
        <img src="/Images/protonent.png"></img>
      </div>
      <div className="about">
      <div className="portfolios">
        <p className="portfolio">Automated<br/>portfolio tracking</p>
        <p className="portfolio-paragraph">Yet bed any for travelling assistance indulgence unpleasing. <br/>Not thoughts all exercise blessing. </p>
      </div>

        <div className="testimonial-container">
        <img src="/Images/icon.png" className="quotes-icon" alt="Quotes Icon" />
          <div className="testimonial-content">
            <p className="testmonial-paragraph">Wise busy past both park when an ye no. Nay<br/> likely her length sooner thrown sex lively income. <br/>The expense windows adapted sir. Wrong widen.</p>
            <h2>- Mike Taylor, Web Designer</h2>
          </div>
        </div>
        </div>

        <div className="connections">
            <div className="wallet">
                <p className="first">01</p>
                <img src="/Images/blue.png"></img>
                <h1 className="reviews">Connect Wallets & <br/>Companies</h1>
                <p className="wallet-paragraph">Indulgence way everything joy alteration<br/> boisterous the attachment. Party we years<br/> to order allow asked of. </p>
            </div>
            <div className="wallet">
                <p className="first">02</p>
                <img src="/Images/red.png"></img>
                <h1 className="reviews">Review <br/>transactions</h1>
                <p className="wallet-paragraph">Indulgence way everything joy alteration<br/> boisterous the attachment. Party we years<br/> to order allow asked of. </p>
            </div>
            <div className="wallet">
                <p className="first">03</p>
                <img src="/Images/yellow.png"></img>
                <h1 className="reviews">Get income <br/>insights</h1>
                <p className="wallet-paragraph">Indulgence way everything joy alteration<br/> boisterous the attachment. Party we years<br/> to order allow asked of. </p>
            </div>
        </div>

        <div className="reviews">
          <div className="images-reviews">
            <img src="/Images/reviews.png" className="reviews-image"></img>
          </div>
          <div className="reviews-choose">
            <h4 className="choose">WHY CHOOSE US</h4>
            <div className="heading-track">
            <h1 className="track">Track your payments on the go with the best way possible</h1>
            <p className="track-paragraph">Indulgence way everything joy alteration boisterous <br/>the attachment. Party we years to order allow asked of. </p>
            </div>
            <hr className="line"></hr>
            <div className="checkcircle">
            <FaCheckCircle className="icons" />
            <p>Get Overview at a glance</p>
            </div>
            <div className="checkcircle">
            <FaCheckCircle className="icons" />
            <p>Deoposit funds easily, securlity</p>
            </div>
            <div className="checkcircle">
            <FaCheckCircle className="icons" />
            <p>Get Live Support</p>
            </div>
          </div>

        </div>

        <div className="pay">
          <div className="pay-paragraph">
          <div className="head-pay">
            <h4 className="choose1">WHY CHOOSE US</h4>
            <h1 className="transaction">Save money with <br/>proper transaction</h1>
            <p className="transaction-paragraph">We so opinion friends me message as delight. <br/>Whole front do of plate heard oh ought. His <br/>defective nor convinced residence own.</p>
          </div>
          
          <div className="quotes-head">
            <div className="quotes-paragraph">
            <img src="/Images/icon.png"></img>
            <p>Wise busy past both park when an ye no. Nay likely her length<br/> sooner thrown sex lively income. The expense windows .</p>
            </div>

            <h3 className="name">- Mike Taylor, Web Designer</h3>
          </div>
    
          </div>

          <div className="pay-image">
          <img src="/Images/pay.png"></img>
          </div>

        </div>

    </div>
  );
};

export default Softwares;
