import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Banner from "../../assets/banner.png";
import Layer1 from "../../assets/icons/layer1.svg";

const Herosection = () => {
  const navigate = useNavigate();

  return (
    <HeroContainer>
        <img src={Layer1} alt="" className="layer1" />
      <div className="wrapper">
        <img src={Banner} alt="banner" className="banner"/>
        <div className="hero__text">
          <h1>
            Enriching all regions globally through
            <span className="innovative"> innovative</span> businesses.
          </h1>
          <p>
            Establish decentralized approaches to link growth economies in
            Africa with high-quality Japanese goods. Enabling
            business-to-business transactions by accommodating both local and
            global payment options.
          </p>
         <Link to="/contact-us"> 
         <button onClick={()=>navigate("/contact-us")}>CONTACT US</button>
         </Link> 
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.header`
  /* mobile screen */
  overflow-y: hidden;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
padding: 30px 20px 0 20px;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.8s ease;
  }

  img {
    width: 100%;
    height: 560px;
    object-fit: cover;
  }
  img.banner{
    animation: slideOut 1.4s ease-in-out forwards;
  }

  .layer1{
    display: none;
  }

  .hero__text {
    animation: expand 1s ease forwards; 

    h1 {
      color: #1a1a1a;
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      margin-top: 30px;
      margin-bottom: 16px;
     .innovative {
        color: var(--mainOrange);
      }
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: #4d4d4d;
 }

    button {
      margin-top: 40px;
     }
  }

  /* big screen */
  @media (min-width: 768px) {
    margin: 40px;
    margin-top: 60px;  
  }
  @media (min-width: 950px) {
    margin: 50px;
    margin-top: 70px;
    img {
        width: 45%;
    }   

    .wrapper {
      position: relative;
      flex-direction: row;
      justify-content: space-between;
    }

    .layer1 {
        position: absolute;
        display: block;
        z-index: -3;
        width: 137px;
        height: 695px;
        left: 30px;
        top: -90px;
    }

    .hero__text {
        width: 45%;
        margin-top: 0;
        h1{
        font-weight: 800;
        color: var(--mainPurple);
        font-size: 38px;
        line-height: 50px;
        }
        p{
        font-weight: 500;
        font-size: 14px;
        line-height: 28px;
        }
    }
  }
  @media (min-width: 1200px) {
    margin-top: 60px;
    margin-right: 40px;
    margin-left: 140px;
  
    img{
        width: 45%;
    }
    .layer1 {
        left: 100px;
    }
    .hero__text {
        width: 50%;
        h1{
        font-size: 48px;
        margin-top: 0;
        line-height: 64px;
        }
        p{
        font-size: 16px;
        line-height: 28px;
        }
    }
  }
`;

export default Herosection;
