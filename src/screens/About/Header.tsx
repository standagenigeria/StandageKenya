import React from "react";
import styled from "styled-components";
import Teams from "../../assets/about.png";
import Layer from "../../assets/icons/about.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Layer} alt="" className="layer" />
      <img src={Teams} className="teams" alt="team mates" />

      <div className="description">
        <h1>ABOUT US</h1>
        <h2>
          We are focused on value chain creation through scaling businesses in
          Africa.
        </h2>
        <p>
          STANDAGE Kenya is an IT Solutions & Trading company. We develop
          digital platforms for international trading, connecting businesses in
          Africa with companies in Japan. We aim to help businesses and users
          from one end of the chain to another.
        </p>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 69px 24px 80px 24px;
  transition: all 1s ease;

  img.layer {
    display: none;
  }

  img {
    width: 327px;
    /* height: 248px; */
    object-fit: contain;
    animation: slideIn 1s ease-in-out forwards;
  }

  .description {
    margin-top: 120px;
    width: 100%;
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
      line-height: 32px;
      margin: 16px 0;
      color: var(--mainPurple);
    }

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: var(--fontColor);
    }
  }

  @media(max-width:350px) {
   img{
    width: 15rem;
   }
  }

  /* big screen  */
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 120px 52px 160px 52px;

    img.layer {
      display: block;
      position: absolute;
      width: 86px;
      height: 680px;
      top: -130px;
      left: -110px;
      z-index: -1;
    }

    img.teams {
      width: 45%;
    }
    .description {
      width: 50%;
      margin-top: 0;

      h1 {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
      }
      h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 43px;
      }
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
      }
    }
  }

  @media (min-width: 1000px) {
    margin: 120px 72px 160px 150px;
    h1 {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }
    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

export default Header;
