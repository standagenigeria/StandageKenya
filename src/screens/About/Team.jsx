import React from "react";
import styled from "styled-components";
import dave from "../../assets/dave.png";
import femi from "../../assets/femi.png";
import chioma from "../../assets/chioma.png";
import olumide from "../../assets/olumide.png";
import group1 from "../../assets/team1.png";
import group2 from "../../assets/team2.png";

const Team = () => {
  return (
    <TeamContainer>
      <div className="flexbox">
        <div className="our__people">
          <h2>OUR PEOPLE</h2>
          <h3>Meet the vibrant people that work behind the scene.</h3>
          <p>
            We work as a team to deliver maximum satisfaction to our customers.
          </p>
        </div>

        <div className="gallery">
          <>
            <div className="picture">
              <img src={dave} alt="dave" />
              <p>Dave Gabriel</p>
              <p className="tag">C.E.O</p>
            </div>
            <div className="picture">
              <img src={femi} alt="femi" />
              <p>Oluwakorede Daramola</p>
              <p className="tag">C.O.O</p>
            </div>
          </>
          <>
            <div className="picture">
              <img src={chioma} alt="chioma" />
              <p>Chioma Ekeocha</p>
              <p className="tag">C.F.O</p>
            </div>
            <div className="picture">
              <img src={olumide} alt="olumide" />
              <p>Olumide Adelewa</p>
              <p className="tag">H.R</p>
            </div>
          </>
        </div>
      </div>
      <div className="group">
        <img src={group2} alt="team" />
        <img src={group1} alt="team" />
      </div>
    </TeamContainer>
  );
};

const TeamContainer = styled.section`
  padding: 80px 24px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--mainOrange);
  }

  h3 {
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

  .gallery {
    padding-top: 80px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-evenly;
    align-items: center;

    .picture {
        width: 193px;
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
      img {
        width: 120px;
        height: 120px;
        object-fit: contain;
        margin-bottom: 8px;
      }
      p {
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        color: #1A1A1A;
        line-height: 28px;
      }
      .tag {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: var(--fontColor);
      }
    }
  }

  .group {
    margin-top: 80px;
    img {
      width: 100%;
      /* width: 327.11px; */
      height: 300px;
      object-fit: cover;
    }
    img + img {
      margin-top: 24px;
    }
  }

  @media (min-width: 900px) {
    .flexbox {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .our__people{
        width: 50%;
    }
    .gallery {
        width: 430px;
    }

    .group{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        img{
            width: 48%;
            /* width: 350px; */
            height: 320px;
        }
        img + img {
      margin-top: 0px;
    }
    }
  }

  @media (min-width: 1000px) {
    .our__people{
        width: 522px;
        p{
            width: 90%;
        }
    }
    .group {
        gap: 30px;
        img{
        width: 50%;
    }
}
  }
`;

export default Team;
