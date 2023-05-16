import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import brand from "../assets/brand.png";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { FiMail } from 'react-icons/fi';
import { MdPhoneInTalk} from 'react-icons/md';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="wrapper">
        <Link to="/">
          <img src={brand} alt="standage" className="brand" />
        </Link>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="container">
          <div className="address">
            <h4 className="orange lagos">Kenya Office:</h4>
            <p className="city">Garden Estate Road next to Roasters Inn, Nairobi.</p>
            <div className="box">
              <FiMail/>
              <p>info@standage.co.ke</p>
            </div>
            <div className="box">
              <MdPhoneInTalk/>
              <p>+254 708 210 219</p>
            </div>
          </div>
          <div className="socials">
            <a
              href="https://twitter.com/STANDAGE_JP"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            {/* <a
              href="https://twitter.com/STANDAGE_JP"
              target="_blank"
              rel="noreferrer"
            >
              <ImWhatsapp />
            </a> */}
            <a
              href="https://www.linkedin.com/company/standage-inc/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
          <div className="address">
            <h4 className="orange headquarters">Headquarters</h4>
            <p className="city">4F Shiba NA Building, 3-6-10, Shiba
Minato-ku, Tokyo, Japan, 105-0014</p>
        </div>
      </div>
      </div>
      <div className="copyright">
        <p> &copy; 2023 Stand Enzi Limited. All Rights Reserved</p>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  /* mobile screen  */
  background: var(--mainBlack);
  margin-top: 5rem;
  padding: 75px 0px 63px 24px;

  .brand {
    width: 150px;
    object-fit: cover;
    margin-bottom: 50px;
  }

  .nav {
    a {
      display: block;
      font-weight: 500;
      font-size: 14px;
      line-height: 28px;
      color: #b3b3b3;
      :hover {
        color: #fffffffd;
        font-weight: 600;
      }
    }
    a + a {
      margin-top: 40px;
    }
  }

  .box{
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .address {
    margin: 24px 0;
    p {
      color: white;
      font-size: 14px;
line-height: 24px;
    }
    p + p, p + div, div + div  {
      margin-top: 16px;
    }
    svg{
      width: 16px;
height: 16px;
color: var(--mainOrange);
    }
  }
  .lagos{
    margin-top: 40px;
  }
  .city{
    width: 239px;
  }
  .orange{
    color: var(--mainOrange) !important;
  }
  h4{
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 28px;
  }

  .socials {
    display: flex;
    gap: 20px;
    svg {
      width: 20px;
      height: 20px;
      color: white;
      transition: all 0.2s ease-out;
      :hover {
        width: 21px;
      }
    }
    a + a {
      margin-left: 10px;
    }
    svg:hover {
      color: var(--mainOrange);
    }
  }

  .copyright {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 500;
      font-size: 14px;
      width: 231px;
      margin-left: 5px;
      line-height: 20px;
      color: #b3b3b3;
    }
  }

  /* big screen  */

  @media (min-width: 450px) {
    .copyright p {
      width: 384px;
    }
  }

  @media (min-width: 1000px) {
    padding: 51px 0px 43px 0;
    .brand {
      /* width: 220px !important; */
      margin-top: -0.4rem !important;
    }
  }

  @media (min-width: 900px) {
    padding: 51px 0px 40px 0;
    .brand {
      width: 150px;
      margin-bottom: 0;
      margin-top: 0.2rem;
    }

    .wrapper {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: center;

      a + a {
        margin-top: 0;
        margin-left: 40px;
      }
    }

    
    .headquarters{
      margin-top: 25px;
  }

  p, h4{
    font-weight: 500;
font-size: 14px;
line-height: 24px;
  }
      .lagos{
      margin-top: 0px;
      line-height: 28px;
    }

    .socials {
      margin-top: 26px;
    }

    .container {
      width: 250px;
    }

    .copyright {
      margin-top: 50px;
      margin-bottom: 0px;
      p {
        width: 384px;
      }
    }

    .address {
      margin: 0;
    }
  }
`;

export default Footer;
