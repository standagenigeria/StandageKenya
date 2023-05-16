import React from "react";
import styled from "styled-components";
import wh1 from "../../assets/quality.png";
import wh2 from "../../assets/value.png";
import wh3 from "../../assets/selection.png";

const WhyChoose = () => {
  return (
    <Container>
      <h2>Why Choose Us?</h2>
      <p>We should be your go-to company for the following reasons.</p>
      <div className="gallery">
        <div className="card">
            <div className="img-cover">
          <img src={wh1} alt="" />
            </div>
            <div className="img-footer">
          <h3>Quality</h3>
          <p>
            We take great pride in the quality of our used cars. Every vehicle
            in our inventory undergoes a thorough inspection by our expert
            technicians to ensure that it meets our high standards for safety
            and performance.
          </p>
            </div>
        </div>
        <div className="card">
        <div className="img-cover">
          <img src={wh2} alt="" />
            </div>
            <div className="img-footer">
                
          <h3>Value</h3>
          <p>
            We believe in providing our customers with the best value for their
            money. That's why we offer affordable prices and a no-haggle pricing
            policy, so you can feel confident that you're getting a fair deal.
          </p>
                </div>
        </div>
        <div className="card">
        <div className="img-cover">
          <img src={wh3} alt="" />
            </div>
            <div className="img-footer">
                
          <h3>Selection</h3>
          <p>
            Our inventory includes a diverse selection of used cars from some of
            the most trusted brands in the industry. We have a wide range of
            models and styles to choose from.
          </p>
                </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 80px 24px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: var(--mainPurple);
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #1a1a1a;
  }

  .gallery {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    .card {
      img {
        width: 100%;
        height: 320px;
        object-fit: cover;
      }
      h3 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: var(--mainPurple);
        margin-top: 24px;
      }
      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--fontColor);
        text-align: left;
      }
    }
  }

  @media (min-width: 500px) {
    .card {
      width: 480px;
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 80px;
  }

  @media (min-width: 1000px) {
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
    .gallery {
      display: flex;
      height: 596px;
      flex-direction: row;
      .card {
        width: 30vw;
        max-width: 380px;
        .img-cover{
            height: 400px !important;
            img {
              height: 400px !important;
            }
        }
        .img-footer{
            height: 180px;
        }
        h3 {
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
        }
        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 28px;
        }
      }
    }
  }
`;

export default WhyChoose;
