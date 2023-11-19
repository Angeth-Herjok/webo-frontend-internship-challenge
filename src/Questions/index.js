import React from "react"
import { FaPlus } from 'react-icons/fa';
import './style.css';

const Questions = () => {
  return (
    <div>
      <div className="questions">
        <img src="/Images/circle.png"></img>
          <p>Fequently <br/>asked questions</p>
          <img src="/Images/yellowcol.png" className="question-image"></img>
      </div>

    <div className="questions-part">
      <div className="questions-parts">
      <div className="questions-part1">
        <div className="questions-part1icon">
          <p>The expense windows adapted sir. Wrong widen drawn.</p>
          <FaPlus />
        </div>
        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing<br/> welcomed ladyship she met humoured sir breeding her. </p>
      </div>

      <div className="questions-part2">
        <p>Six curiosity day assurance bed necessary?</p>
        <FaPlus />
      </div>

      <div className="questions-part2">
        <p>Produce say the ten moments parties?</p>
        <FaPlus />
      </div>

      <div className="questions-part2">
        <p>Simple innate summer fat appear basket his desire joy?</p>
        <FaPlus />
      </div>

      <div className="questions-part2">
        <p>Outward clothes promise at gravity do excited?</p>
        <FaPlus />
      </div>

      </div>

      <div className="message-part">
        <img src="/Images/message.png"></img>
        <p className="messages">Do you have more questions?</p>
        <p className="messages1">End-to-end payments and financial<br/> management in a single solution. Meet the <br/>right platform to help realize.</p>
        <button>Shoot a Direct Mail</button>
      </div>

      </div>
    </div>
  );
};

export default Questions;
