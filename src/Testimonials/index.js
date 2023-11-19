import React from "react";
import './style.css';
import { FaUser, FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div>
        <div className="testimonials-backgrounds">
           <div className="testimonials">
                <div className="testimonial">
                  <h1>Testimonial</h1>
                  <p>We so opinion friends me message as delight. Whole front do of plate heard oh<br/> ought. His defective nor convinced residence own.</p>
                </div>
                
                <div>
                  <img src="/Images/testimonials.png"></img>
                </div>
            </div>

            <div className="testimonials-image">
                <div className="testimonials-icon">
                    <div className="testimonials-paragraph">
                        <img src="/Images/icon.png"></img>
                        <p>Wise busy past both park when an ye no. Nay likely her length<br/> sooner thrown sex lively<br/> income. The expense windows .<br/> Blessing welcomed ladyship.</p>
                        <h3>- Mike Taylor, Web Designer</h3>
                    </div>
                    <div className="girl-image">
                        <img src="/Images/girl.png"></img>
                    </div>
                </div>

                <div className="testimonials-icon">
                    <div className="image-paragraph">
                        <img src="/Images/icon.png"></img>
                        <p>Wise busy past both park when an ye no. Nay likely her length<br/> sooner thrown sex lively<br/> income. The expense windows .<br/> Blessing welcomed ladyship.</p>
                        <h3>- Mike Taylor, Web Designer</h3>
                    </div>
                    <div className="boy-image">
                        <img src="/Images/boy.png"></img>
                    </div>
                </div>
            </div>

        </div>
        
        <div className="statistics-background">
        <div className="statistics">
           <div className="statistics1">
            <p>We speak with<br/> our powerfull <br/> statistics</p>
           </div>

           <hr className="vertical-lines"></hr>

           <div className="statistics1">
            <p className="statistics-number">1M+</p>
            <div className="statistics-icon">
            <FaUser className="statistics-icons"/>
            <p>Active Users</p>
            </div>
           </div>

           <div className="statistics1">
            <p className="statistics-number">30K+</p>
            <div className="statistics-icon">
            <FaStar className="statistics-icons"/>
            <p>5-Stars Reviews</p>
            </div>
           </div>

           <div className="statistics1">
            <p className="statistics-number">$252M</p>

            <div className="statistics-icon">
            <FaStar className="statistics-icons"/>
            <p>Transactions</p>
            </div>
           </div>

           <div className="statistics1">
            <img src="/Images/scroll.png" className="scroll-img"></img>
           </div>
        </div>
        </div>

    </div>
  );
};

export default Testimonials;
