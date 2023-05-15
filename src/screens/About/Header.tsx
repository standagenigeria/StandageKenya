import React from "react";
import styled from "styled-components";
import Teams from "../../assets/about.png";
import Layer from "../../assets/icons/about.svg";
import japan from "../../assets/japan.png";
import flag1 from "../../assets/flag1.png";
import flag2 from "../../assets/flag2.png";
import flag3 from "../../assets/flag3.png";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <img src={Layer} alt="" className="layer" />
        <img src={Teams} className="teams" alt="team mates" />

        <div className="description">
          <h1>ABOUT US</h1>
          <h2>
            We are focused on value chain creation through scaling businesses in
            Africa.
          </h2>
          <p>
          Stand Enzi takes pride in offering a wide selection of used cars from some of the most trusted brands in the industry. Our inventory is regularly updated to ensure that we have the latest models and styles available for our customers.
          </p>
        </div>
      </div>

      <div className="parent">
        <div className="box">
          <div className="flag">
            <h3>STANDAGE Japan</h3>
            <img src={japan} className="japan" alt="japan flag" />
          </div>
          <p>
          Our parent company, Standage Japan, is a skilled organization that ventures beyond national boundaries to establish innovative ventures. The goal is to evolve into a complete enterprise that provides support to Fintech enterprises by creating trade infrastructure services that utilize smart contracts/blockchain.
          </p>
        </div>
      </div>

      <div className="others">
        <div className="wrap">
          <h4>Other Countries Of Operation</h4>
          <div className="box">
            <img src={flag1} alt="south africa" />
            <img src={flag2} alt="kenya" />
            <img src={flag3} alt="egypt" />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.main`
  margin: 69px 24px 80px 24px;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
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
        line-height: 24px;
        color: var(--fontColor);
      }
    }
  }

  .parent {
    margin-top: 48px;
    h3 {
      font-weight: 500;
      font-size: 16px;
      color: var(--mainPurple);
      line-height: 28px;
      margin-bottom: 10px;
    }
    .japan {
      width: 156px;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      color: var(--fontColor);
      font-weight: 500;
      line-height: 24px;
    }
  }

  .others {
    margin-top: 40px;
    padding: 0 52px;
    h4 {
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
      color: var(--mainPurple);
      margin-bottom: 10px;
    }
    img {
      width: 96px;
    }
    .box {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      gap: 19px;
    }
  }

  @media (max-width: 350px) {
    img {
      width: 15rem;
    }
    .others img {
      width: 66px;
    }
  }

  /* big screen  */
  @media (min-width: 768px) {
    .wrapper {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 120px 52px 160px 52px;

      img.layer {
        display: block;
        position: absolute;
        width: 86px;
        height: 680px;
        top: -230px;
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

    .box {
      display: flex;
      gap: 40px;
      align-items: center;
      margin-bottom: 80px;
      h3 {
        font-size: 16px;
        line-height: 28px;
      }
      img.japan {
        width: 194px;
      }
      .flag {
        align-self: baseline;
      }
      p {
        width: 70%;
        /* align-self: flex-end; */
        font-size: 16px;
        line-height: 28px;
      }
    }

    .others {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  @media (min-width: 1000px) {
    margin: 120px 72px 65px 150px;
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
