import React from "react";
import styled from "styled-components";
import vh1 from "../../assets/car1.png";
import vh2 from "../../assets/car2.png";
import vh3 from "../../assets/car3.png";
import vh4 from "../../assets/car4.png";
import vh5 from "../../assets/car5.png";

const Vehicles = () => {
  return (
    <Container>
      <h2>Explore Vehicles</h2>
      <p>Discover the wide range of automobiles we offer.</p>
      <div className="gallery">
        <div className="card">
          <img src={vh1} alt="" />
          <p>LANDCRUISER PRADO</p>
        </div>
        <div className="card">
          <img src={vh2} alt="" />
          <p>TOYOTA NOAH</p>
        </div>
        <div className="card">
          <img src={vh3} alt="" />
          <p>TOYOTA SIENTA</p>
        </div>
        <div className="card">
          <img src={vh4} alt="" />
          <p>TOYOTA VOXY</p>
        </div>
        <div className="card">
          <img src={vh5} alt="" />
          <p>NISSAN</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  background: #1a1a1a;
  padding: 90px 24px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #e6e6e6;
    margin-bottom: 40px;
  }
  .card {
    img {
      width: 100%;
      height: 312px;
      object-fit: cover;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: #e6e6e6;
    }
  }

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom:130px;
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
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }
    .card {
      img {
        width: 380px;
        height: 312px;
      }
      p {
        margin-top: 16px;
      }
    }
  }

  @media (min-width: 1500px) {
    .gallery {
      gap: 34px;
    }
    .card {
      img {
        width: 480px;
        height: 320px;
      }
    }
  }
`;

export default Vehicles;
