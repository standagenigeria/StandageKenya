import React from "react";
import styled, { keyframes } from "styled-components";
import { AllPartners } from "../../components/Partners";

const Partners = () => {
  return (
    <PartnersContainer>
      <div className="description">
        <h3>
          We Have a Robust Network of Companies that have formed a formidable
          Business Front.
        </h3>
        <p>
          We have built scaling businesses, purposefully designed for value
          creation in Nigeria. From our Parent firm in Japan, our aim is to
          enrich regions of the World thereby bridging the gap of wealth across
          Nations.
        </p>
      </div>
      <div className="wrapper">
        <div className="slider">
          {AllPartners.map((partner) => (
            <div className="img__container" key={partner.id}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </PartnersContainer>
  );
};
const RightUp = keyframes`
 from {bottom:0px;}
  to {bottom: 530px;}
`;

const PartnersContainer = styled.section`
  padding: 80px 24px;
  h3 {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    margin-bottom: 16px;
    line-height: 32px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--fontColor);
    text-align: center;
  }

  .wrapper {
    overflow: hidden;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider {
    width: 350px;
    height: 296px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    position: relative;
    justify-content: space-around;
    animation: ${RightUp} infinite;
    animation-duration: 15s;
    animation-delay: 0s;
    animation-timing-function: ease;
    animation-direction: alternate;

    .img__container {
      background: #ffffff;
      box-shadow: 0px 3.93617px 11.8085px rgba(0, 0, 0, 0.1);
      width: 150px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100px;
      }
    }
  }

  @media (min-width: 650px) {
    .slider {
      width: 600px;
    }
  }

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 80px;

    .wrapper {
      margin-top: 0px;
    }

    .description {
      width: 522px;
      align-self: center;
      h3,
      p {
        text-align: left;
      }
      h3 {
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 16px;
      }
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
      }
    }
    .slider {
      width: 415px;
      height: 376px;

      .img__container {
        height: 64px;
      }
    }
  }
`;

export default Partners;
