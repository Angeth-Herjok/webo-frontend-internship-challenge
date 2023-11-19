// import React from "react"
// import { FaCheckCircle, FaPlayCircle, FaAngleDown } from 'react-icons/fa';
// import './style.css';

// const Home = () => {
//   return (
//     <div className="background">

//       <nav className="navbar">
//         <div className="nav-buttons">
//           <p className="logo">AR SHAKIR</p>
//           <p className="nav1">
//             Product <FaAngleDown />
//           </p>
//           <p className="nav1">
//             Template <FaAngleDown />
//           </p>
//           <p className="nav1">Blog</p>
//           <p className="nav1">Pricing</p>
//           <p className="sign-In">Sign In</p>
//           <button className="start-free-button">Start Free</button>
//         </div>
//       </nav>
      
//       <div className="header">
//         <div className="header-content">
//           <div className="description">
//             <h1 className="heading">Managing freelance<br/> payments has never <br/>been easier</h1>
//             <p className="paragraph">Yet bed any for travelling assistance indulgence <br/>unpleasing. Not thoughts all exercise blessing.</p>
//           </div>
//           <div className="get-started">
//             <button className="get-started-button">Get Started</button>
//             <FaPlayCircle className="icon2"/>
//             <p className="get-started-paragraph">See How it works</p>
//           </div>
//         </div>
//           <div className="company-image">
//             <img src="/Images/companyimage.png" alt="Company" className="company-img" />
//           </div>
//       </div>

//       <div className="section">
//         <div className="checkbox">
//           <img src="/Images/dots.png"></img>
//         </div>
//         <div className="checkbox1">
//           <FaCheckCircle className="icon1"/>
//           <p>Free Register</p>
//         </div>
//         <div className="checkbox2">
//           <FaCheckCircle className="icon1" />
//           <p >Great Service</p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Home;



import React from "react";
import { FaCheckCircle, FaPlayCircle, FaAngleDown } from 'react-icons/fa';
import './style.css';

const Home = () => {
  return (
    <div className="background">
      <img src="Images/home.png" alt="background"></img>
      <nav className="navbar">
        <div className="nav-buttons">
          <p className="logo">AR SHAKIR</p>
          <p className="nav1">
            Product <FaAngleDown />
          </p>
          <p className="nav1">
            Template <FaAngleDown />
          </p>
          <p className="nav1">Blog</p>
          <p className="nav1">Pricing</p>
          <p className="sign-In">Sign In</p>
          <button className="start-free-button">Start Free</button>
        </div>
      </nav>

      <div className="header">
          <div className="description">
            <h1 className="heading">Managing freelance<br/> payments has never <br/>been easier</h1>
            <p className="paragraph">Yet bed any for travelling assistance indulgence <br/>unpleasing. Not thoughts all exercise blessing.</p>
          </div>
          <div className="get-started">
            <button className="get-started-button">Get Started</button>
            <FaPlayCircle className="icon2"/>
            <p className="get-started-paragraph">See How it works</p>
          </div>
      </div>

      <div className="section">

        <div className="checkbox1">
          <FaCheckCircle className="icon1"/>
          <p>Free Register</p>
        </div>
        <div className="checkbox2">
          <FaCheckCircle className="icon1" />
          <p>Great Service</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
