import React from "react";
import styled from "styled-components";
import Team from "../../assets/choose.png";

const WhyChooseUs = () => {
  return (
    <Container>
      <h2>Why Choose Us?</h2>
      <div className="flex__section">
        <img src={Team} alt="team work" />
        <div className="wrapper">
          <div className="container">
            <div className="flexbox">
              <h4>Expertise :</h4>
              <p>
                Our team of experts have years of experience in the Trading
                sector and a deep understanding of the latest trends. We are
                dedicated to providing exceptional customer service, from start
                to finish.
              </p>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="flexbox">
              <h4>Reliability :</h4>
              <p>
                We are dedicated to providing our customers with high-quality
                products that they can trust.
              </p>
            </div>
            <hr />
          </div>
          <div className="flexbox">
            <h4>Innovation :</h4>
            <p>
              We are committed to innovation and always strive to stay ahead of
              the curve in the ever-changing world of technology and finance.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  background: #f2f2f2;
  padding: 76px 24px 90px 24px;
  h2 {
    font-weight: 700;
    font-size: 24px;
    color: var(--mainPurple);
    line-height: 32px;
  }
  h4 {
    font-weight: 500;
    font-size: 16px;
    color: var(--mainPurple);
    line-height: 28px;
    margin-bottom: 10px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    color: var(--fontColor);
    line-height: 20px;
  }
  img {
    width: 100%;
    object-fit: contain;
    margin: 30px 0;
  }
  hr {
    border-top: 2px solid #e6e6e6;
    margin: 24px 0;
  }

  /* big screen  */
  @media (min-width: 650px) {
    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      margin-left: 3rem;
      margin-bottom: 56px;
    }
    h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }
    hr {
      margin: 32px 2.7rem;
    }
    img {
      height: 400px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      width: 70%;
    }
    .flexbox {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
    }
  }

  @media (min-width: 1000px) {
    padding: 101px auto 131px auto;
    .flex__section {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row-reverse;
    }
    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      margin-left: 2rem;
    }
    img{
      margin:auto 0;
    }
    .container {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default WhyChooseUs;
