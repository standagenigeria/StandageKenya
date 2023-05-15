import React from "react";
import styled from "styled-components";
import AboutImg from "../../assets/company.png";
import star from "../../assets/Star.svg";

const About = () => {
  return (
    <AboutContainer>
      <img src={AboutImg} alt="" className="about-img" />
      <div className="wrapper">
        <div className="description">
          <img src={star} alt="" className="star" />
          <h2>About Our Company</h2>
          <p>
            Established in 2022, Stand Enzi takes pride in offering a wide
            selection of used cars from some of the most trusted brands in the
            industry. Our inventory is regularly updated to ensure that we have
            the latest models and styles available for our customers.
          </p>
        </div>
        <div className="footer">
          <div className="box">
            <h3>20+</h3>
            <p>Types of Premium Used Vehicles</p>
          </div>
          <div className="line"></div>
          <div className="box">
            <h3>2+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .about-img {
    width: 100%;
    /* height: 320.79px; */
    object-fit: cover;
  }

  .star {
    width: 55px;
    height: 55px;
    margin-top: 43px;
    margin-bottom: 16px;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    color: var(--mainPurple);
    line-height: 32px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--fontColor);
  }
  .footer {
    display: flex;
    align-items: center;
    margin-top: 24px;
    justify-content: space-evenly;
    .line {
      width: 4px;
      height: 76px;
      background: #f2f2f2;
      border-radius: 2px;
    }
    .box {
      text-align: center;
      h3 {
        font-weight: 800;
        font-size: 32px;
        line-height: 48px;
        color: var(--mainPurple);
      }
      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #1a1a1a;
      }
    }
  }
    @media (min-width: 600px) {

      .about-img{
        width: 526px;
  height: 499px;
      }
    }

    @media (min-width: 768px) {
      .wrapper{
        width: 70%;
      .star{
        width: 71px;
height: 71px;
      }
      h2{
        font-weight: 700;
font-size: 32px;
line-height: 48px;
      }
      p{
        font-weight: 500;
font-size: 16px;
line-height: 28px;
      }
.footer{
  margin-top: 42px;
}
      .box{
      
        h3{
          font-weight: 800;
font-size: 32px;
line-height: 48px;
        }
        p{
          font-weight: 500;
font-size: 14px;
line-height: 24px;
        }
      }
    }
    }
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .wrapper{
      width: 443px;
    }   
  }
`;

export default About;


