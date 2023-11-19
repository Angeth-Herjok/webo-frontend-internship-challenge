import React from "react"
import './style.css';
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="blogs-background">
        <p className="heading1">Recent Blogs</p>
        <div className="blogs">
            <div>
            {/* <p>Recent Blogs</p> */}
            <p className="blogs-practics">Best Practices</p>
            <p className="blogs-paragrap">In design active temper be uneasy. <br/>Thirty for remove plenty regard.</p>
            <div className="blogs-icon">
            <p>Read More</p>
            <FaArrowRight />
            </div>
            </div>

            <div>
                <img src="/Images/people.png"></img>
            </div>
        </div>

        <div className="practices">
            <div className="practices-body">
                <h5>BEST PRACTICES</h5>
                <p>Partiality on or <br/> continuing particular <br/> principles as. </p>
            </div>

            <div className="practices-body">
                <h5>BEST PRACTICES</h5>
                <p>Village did removed <br/>enjoyed explain</p>
            </div>

            <div className="practices-body">
                <h5>BEST PRACTICES</h5>
                <p>Wise busy past both<br/> park when an ye no.<br/> Nay likely her length.</p>
            </div>
        </div>

        <div className="blogs-images">
            <div className="blogs-image">
                <img src="/Images/memebers.png"></img>
            </div>

            <div className="blogs-image">
                <img src="/Images/sun.png"></img>
            </div>

            <div className="blogs-image">
                <img src="/Images/building.png"></img>
            </div>
        </div>

    </div>
  );
};

export default Blogs;
