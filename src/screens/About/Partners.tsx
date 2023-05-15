import React from "react";
import styled, { keyframes } from "styled-components";
import partners from "../../assets/partner.png";

const Partners = () => {
  return (
    <PartnersContainer>
      <div className="description">
        <p className="orange">OUR NETWORK</p>
        <h3>
          We Have a Robust Network of Companies that have formed a formidable Business Front.
        </h3>
        <p>
        We have built scaling businesses, purposefully designed for value creation in Africa. From our Parent firm in Japan, our aim is to enrich regions of the World thereby bridging the gap of wealth across Nations.
        </p>
      </div>
      <div className="wrapper">
      <div className="partner-img">
        <img src={partners} alt="" />
        </div>
      </div>
    </PartnersContainer>
  );
};


const PartnersContainer = styled.section`
  padding: 80px 24px;
  h3 {
    font-weight: 700;
    font-size: 24px;
    /* text-align: center; */
    margin-bottom: 16px;
    line-height: 32px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--fontColor);
    /* text-align: center; */
  }
  .orange{
    line-height: 24px;
    color: var(--mainOrange);
    /* text-align: left; */
    margin-bottom: 16px;
  }

  .wrapper {
    overflow: hidden;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
  .partner-img{
    img{
      width: 100%;
      height: 320px;
object-fit:cover;
    }
  }



  @media (min-width: 650px) {
    // .slider {
    //   width: 600px;
    // }
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

    .partner-img{
      img{
        width: 525.17px;
  height: 480px;
      }
    }
  }
`;

export default Partners;
