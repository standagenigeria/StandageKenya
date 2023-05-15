import React from "react";
import styled from "styled-components";
import BG from "../../assets/hero-bg.png";

const Hero = () => {
  return (
    <Container>
      <div className="wrapper">
        <h1>
          High-Quality <span>Used Cars</span> at Affordable Prices.
        </h1>
        <p>
          We take pride in being one of the leading providers of pre-owned
          vehicles in the market, offering a comprehensive range of cars that
          are thoroughly inspected and certified to ensure that our customers
          receive the best value for their money.
        </p>
        <button>CONTACT US</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .wrapper {
      padding: 70px 24px ;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    color: #ffffff;
    h1 {
        font-weight: 700;
        font-size: 32px;
line-height: 48px;
      text-align: center;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      margin-bottom: 24px;
    }
    span {
      color: var(--mainOrange);
    }
  }

  @media(min-width:768px) {
    height: 90vh;
    max-height: 720px;
    .wrapper{
    width: 746px;
    padding: 0 24px ;
    h1{
        font-weight: 800;
      font-size: 48px;
      line-height: 64px;
      margin-bottom: 16px;
    }
    p{
        margin-bottom: 40px;
        width: 606px;
    }
    }
  }
`;

export default Hero;
