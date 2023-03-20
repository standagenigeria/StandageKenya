import React from "react";
import styled, { keyframes } from "styled-components";
import { AllPartners } from "../../components/Partners";


const Partners = () => {
  return (
    <PartnersContainer>
      <h2>Our Partners</h2>
      <p>Here are some of our partners.</p>

      <div className="container">
        <div className="Slider">
          {AllPartners.map((partner) => (
            <div className="SliderItem" key={partner.id}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </PartnersContainer>
  );
};

const FloatLeft = keyframes`
from {left:0px;}
  to {left: 900px;}
`;

const PartnersContainer = styled.section`

  margin: 0 2rem;
  text-align: center;

  .container {
    position: relative;
    z-index: -1;
    overflow: hidden;
    margin-bottom: 80px;

    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
    :before {
      position: absolute;
      top: 0;
      width: 15px;
      height: 200px;
      content: "";
      z-index: 5;
      left: 0;
      background: linear-gradient(
        270deg,
        rgba(255, 57, 170, 0) 18.18%,
        #ffffff 100%
      );
    }
    :after {
      background: linear-gradient(
        90deg,
        rgba(255, 57, 170, 0) 18.18%,
        #ffffff 100%
      );
      position: absolute;
      top: 0;
      width: 15px;
      height: 200px;
      content: "";
      z-index: 5;
      right: 0;
    }
  }

  .Slider {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 24px;
    animation: ${FloatLeft} infinite;
    animation-duration: 40s;
    animation-delay: 0s;
    animation-timing-function: linear;
    animation-direction: normal;
  }

  .SliderItem {
    width: 500px;
    img {
      width: 180px;
      margin: auto;
      object-fit: contain;
    }
  }


  /* big screen */
  @media (min-width: 768px) {

    margin: 120px 5rem;
    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }

    .Slider {
      margin-top: 30px;
    }
  }

  @media (min-width: 1200px) {
    margin: 0 10rem;
  }
`;

export default Partners;
