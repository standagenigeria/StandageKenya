import React from "react";
import styled from "styled-components";
import MobileBG from "../../assets//mobile-bg.png";
import DesktopBG from "../../assets/desktop-bg.png";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="wrapper">
      <h1>
        Explore our wide selection of{" "}
        <span className="orange">high-quality products.</span>
      </h1>
      <p>
        Our products are carefully selected based on their quality, durability,
        and functionality. We understand that our customers want products that
        not only look great, but also stand the test of time.{" "}
      </p>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 400px;
  overflow-y: hidden;
  color: #ffffff;
  background-image: url(${MobileBG});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2.5rem;

  .wrapper{
    transition: all 1s ease;    
    animation: slideUp 1s ease forwards;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;

    .orange {
      color: var(--mainOrange);
    }
  }
  p {
    margin-top: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }


  /* big screen  */
  @media (min-width: 768px) {
    background-image:url(${DesktopBG});
    h1 {
      font-weight: 800;
      width: 714px;
      font-size: 48px;
      line-height: 64px;
    }
    p {
      font-weight: 500;
      width: 717px;
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (min-width: 2000px) {
    h1 {
      width: 914px;
    }
    p{
      width: 917px; 
    }
  }
`;

export default Header;
