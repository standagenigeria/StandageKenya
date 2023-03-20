import React from "react";
import styled from "styled-components";
import Support from "../../assets/contact.png";

const Header = () => {
  return (
    <Container>
      <div className="description">
        <h1>CONTACT US</h1>
        <h2>Get in touch with the Team.</h2>
        <p>
          Our sales and support teams are more than happy to answer your
          questions and discuss our products and services. Send us a message,
          and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="img__background"></div>
    </Container>
  );
};

const Container = styled.header`
  margin-bottom: 64px;
  transition: all 1s ease;

  .description {
    padding: 80px 24px 40px 24px;
    animation: expandLeft 1s ease forwards;
    h1 {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: var(--mainOrange);
    }
    h2 {
      font-weight: 700;
      font-size: 24px;
      margin: 10px 0;
      line-height: 32px;
      color: var(--mainPurple);
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
      color: #1a1a1a;
    }
  }
  .img__background {
    width: 100%;
    height: 450px;
    animation: slideIn 1s ease-in-out;
    /* background-position: center; */
    background-image: url(${Support});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fffaf4;

    .description {
      width: 65%;
      padding: 0px;
      padding-left: 100px;

      p {
        width: 75%;
      }
    }
    .img__background {
      width: 505px;
      height: 730px;
    align-self: flex-start;
    }
  }

  @media (min-width: 1200px) {
    .description {
      width: 65%;
      padding-left: 180px;
    }
    .img__background {
      width: 705px;
    }
  }
`;

export default Header;
