import React from "react";
import styled from "styled-components";
import Layer2 from "../../assets/icons/layer2.svg"

const About = () => {
  return (
    <AboutContainer>
      <img src={Layer2} alt="" />
      <h2>About Our Company</h2>
      <p>
        Established in 2017, STANDAGE Kenya specializes in IT Solutions and
        Trading. We create digital platforms for international trade, linking
        African businesses with Japanese companies. We bring the finest Japanese
        products with the highest quality to every corner of Africa.
      </p>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 80px 20px 80px 20px;

  img{
   display: none;
  }

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: var(--mainPurple);
    margin-bottom: 8px;
  }
  p {
    font-weight: 500;
    /* width: 95%; */
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: var(--fontColor);
  }

  @media (min-width: 950px) {
    h2 {
      font-size: 32px;
      line-height: 48px;
    }
    p {
      width:70%;
      font-size: 16px;
      line-height: 28px;
    }
    img{
    position: absolute;
    display: block;
    top: 15px;
    z-index: -1;
    right: -30px;
  }
  }

  @media (min-width: 1200px) {
    p {
      width:50%;
    }
  }
`;

export default About;
