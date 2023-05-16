import React from "react";
import styled from "styled-components";

const Values = () => {
  return (
    <ValueContainer>
      <div className="grouped">
        <div className="resized">
          <h2>Our Values</h2>
          <p>
          We Are in Africa to Provide Businesses that Pitch the African Continent At Par with the rest of the World. The Best Way to Make the Difference is to create a Livelihood for Nigerians. We create Inclusive Businesses to cater for everyone’s needs..
          </p>
        </div>
      </div>

      <div className="grouped flexbox">
        <div className="border">
          <h2>Our Mission</h2>
          <p>
            " Enhancing The Quality Of Life Through The Creation Of Innovative
            Business In Africa "
          </p>
        </div>

        <div className="border">
          <h2>Our Vision</h2>
          <p>
            To Be Africa's No. 1 Quality Product Provider
            <br /> To Be Africa's No. 1 Quality Employee Provider
            <br /> To Be Africa's No. 1 Quality Technology & Service Provider
          </p>
        </div>
      </div>
    </ValueContainer>
  );
};

const ValueContainer = styled.section`
  background: #1a1a1a;
  padding: 90px 24px 135px 24px;
  h2 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 32px;
    color: var(--mainOrange);
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #f2f2f2;
  }

  .resized {
    width: 328px;
    /* height: 160px; */
  }

  .grouped {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .border {
    margin-bottom: 16px;
    margin-top: 64px;
    padding: 32px;
    width: 330px;
    /* height: 250px; */
    border: 1px solid #fddfbb;
    filter: drop-shadow(0px 5px 15px rgba(255, 255, 255, 0.15));
  }

  .border + .border {
    margin-top: 24px;
  }

  @media (max-width: 400px) {
    .border, .resized {
  width: 80%;
  }
}

  @media (min-width: 768px) {
    padding: 94px 100px 107px 100px 107px;
    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }
    .resized {
      width: 638px;
      height: 168px;
    }

    .border {
      width: 464px;
      height: 305px;
      /* padding: 78px 44px 59px 44px; */
    }

    .flexbox {
      flex-direction: row;
      gap: 40px;
      margin-top: 80px;
    }
    .border {
      margin-bottom: 0px;
      margin-top: 0px;
    }
    .border + .border {
      margin-top: 0px;
    }
  }

  @media (min-width: 1000px) {
    .border {
      padding: 78px 44px 59px 44px;
    }
  }
`;

export default Values;
