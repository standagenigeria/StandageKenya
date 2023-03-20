import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import brand from "../assets/icons/brand.svg";
import instagram from "../assets/icons/social.svg";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import twitter from "../assets/icons/social-4.svg";
import copyright from "../assets/icons/copyright.svg";

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
          {/* <Link to="/merchandise">Merchandise</Link>
          <Link to="/blog">Blog</Link> */}
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="container">
          <div className="address">
            <p>5 Ragati Road, Nairobi Kenya.</p>
            <p>info@standage.com.ng</p>
            <p>+254-916 123 8193</p>
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
              href="https://www.instagram.com/standage_ng/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              href="http://api.whatsapp.com/send?phone=2349161238193"
              target="_blank"
              rel="noreferrer"
            >
              <ImWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/company/standage-ltd/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <img src={copyright} alt="copyright" />
        <p> 2022 Standage Kenya Limited. All Rights Reserved</p>
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
    width: 134.58px;
    object-fit: cover;
    margin-bottom: 100px;
  }

  .nav {
    a {
      display: block;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
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

  .address {
    margin: 24px 0;
    p {
      color: white;
    }
    p + p {
      margin-top: 16px;
    }
  }

  .socials {
    display: flex;
    gap: 20px;
    svg {
      width: 24px;
      height: 24px;
      color: white;
      transition: all 0.2s ease-out;
      :hover {
        width: 25px;
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
    margin-bottom: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 500;
      font-size: 14px;
      width: 231px;
      margin-left: 1rem;
      line-height: 20px;
      color: #b3b3b3;
    }
  }

  /* big screen  */

  @media (min-width: 650px) {
    .copyright p {
      width: 364px;
    }
  }

  @media (min-width: 900px) {
    padding: 51px 0px 43px 0;
    .brand {
      margin-bottom: 0;
      margin-top: -0.3rem;
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

    .socials {
      margin-top: 26px;
    }

    .container {
      width: 250px;
    }

    .copyright {
      margin-top: 120px;
      margin-bottom: 0px;
      p {
        width: 364px;
      }
    }

    .address {
      margin: 0;
    }
  }
`;

export default Footer;
