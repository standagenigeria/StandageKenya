import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/icons/arrow.svg";
import Artec from "../../assets/artec.png";
import Health from "../../assets/rhealth.png";
import Solar from "../../assets/batteries.png";
import Automobile from "../../assets/automobile.png";
import Danest from "../../assets/danest.png";
import Digitrad from "../../assets/market.png";
import Layer from "../../assets/icons/square.svg";
import { toast, ToastBar, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = () => {
  const AllProducts = [
    {
      name: "Artec Robo",
      description:
        "Artec Robo is a STEM Education Fostering Kit-set that introduces Robotics / Programming to kids from a young age. It helps their creative mind while helping their logical capacity to think solutions. A perfect fusion between Learning and Fun.",
      image: Artec,
    },
    {
      name: "Healthcare Solutions",
      description:
        "Standage imports Medical Equipments, Devices and Consumables ranging from Anaesthesia apparatus, mobile x-ray digital units, portable ultrasound probe, ultrasound systems, amidst many others.",
      image: Health,
    },
    {
      name: "Solar Batteries",
      description:
        "Yuasa Battery is the same quality across all countries and continents. We manufacture our products from material level to Lead acids and Lithium batteries. With 100+ years of continuous technology improvement and development.",
      image: Solar,
    },
    {
      name: "Automobiles",
      description:
        "Standage imports high-quality automobiles such as suzuki-every and hiace buses.We have a warehouse full of these vehicles and it will be our pleasure to give you a tour.",
      image: Automobile,
    },
    {
      name: "DANEST ",
      description:
        "DANEST is an innovative paint solution that provides high level of heat insulation and heat shielding, making it ideal for use in homes, offices, hospital, industries and other buildings.",
      image: Danest,
    },
    {
      name: "DiGiTRAD MarketPlace",
      description:
        "DiGiTRAD is an international trading B2B digital marketplace that connects Japanese solutions to countries in Africa, protecting both the sellers and buyers. It is built to serve SME B2B global trade ventures from sale to delivery.",
      image: Digitrad,
      link: "http://digitradpc.com.ng/"
    },
  ];

  const ComingSoon = () => {
    toast("🛎  Coming soon...", {
      duration: 2000,
    });
  };

  return (
    <ProductsContainer>
      <h2>ALL PRODUCTS</h2>
      <Toaster>
        {(t) => (
          <ToastBar
          position="bottom-center"
            toast={t}
            style={{ background: '#0f0f0fdf', borderRadius: '10px', color:"white", border:"1px solid white", outline:0, fontWeight:"500"}}
          />
        )}
      </Toaster>
      <img src={Layer} alt="" className="layer" />
      {AllProducts.map((product) => (
        <div key={product.name} className="flexbox">
          <img
            src={product.image}
            alt={product.name}
            className={`product ${product.name}`}
          />

          <div className="description">
            <h3>{product.name}</h3>
            <p className="text">{product.description}</p>
            {product.link ?
            <div className="button__container">
              <a href="https://app.digitrad.world/"  target="_blank"
              rel="noreferrer" >
              <button  >
                <p>Visit Website</p>
                <span>
                  <img src={Arrow} alt="arrow" />
                </span>
              </button>
              </a>
            </div>
             : ""}
          </div>
        </div>
      ))}
    </ProductsContainer>
  )
};

const ProductsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1500px;
  padding: 0 24px;

  h2 {
    font-weight: 500;
    align-self: flex-start;
    margin-top: 80px;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 28px;
    color: var(--mainOrange);
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-top: 24px;
    margin-bottom: 10px;
    color: var(--mainPurple);
  }

  .layer {
    display: none;
  }

  p.text {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 24px;
    color: var(--fontColor);
  }

  .flexbox {
    margin-top: 80px;
  }

  img.product {
    width: 100%;
    height: 350px;
    object-fit: contain;
  }
  button {
    width: 159px;
    height: 40px;
    background: #0a014f;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
    span {
      margin: 0;
      width: 16px;
      height: 16px;
    }
  }

  button:hover {
    box-shadow: 0px 2px 10px 5px #0a014f;
    color: white;
  }

  button:after {
    background: #0a014f;
  }

  @media (min-width: 550px) {
    h3 {
      text-align: left;
    }
    button {
      margin-left: 0;
    }
  }

  /* big screen  */
  @media (min-width: 768px) {
    margin: 60px 95px 190px 95px;

    .flexbox + .flexbox {
      margin-top: 140px;
    }

    p.text {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }

    h2 {
      font-weight: 600;
      font-style: normal;
      font-size: 20px;
      margin-top: 0;
      line-height: 28px;
    }

    h3 {
      font-weight: 700;
      font-style: normal;
      font-size: 32px;
      text-align: center;
      line-height: 48px;
    }

    button {
      width: 306px;
      margin-left: 25%;
      height: 48px;
      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  @media (min-width: 1100px) {
    margin: 100px 50px 170px 50px;
    position: relative;

    img.product {
      width: 526px;
      height: 504px;
    }

    h3 {
      text-align: left;
    }
    button {
      margin-left: 0;
    }

    .description {
      width: 40%;
      p {
        text-align: left;
      }
    }

    .layer {
      display: block;
      position: absolute;
      z-index: -1;
      right: 240px;
      top: 750px;
    }

    .flexbox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row-reverse;
      :nth-child(even) {
        flex-direction: row;
      }
    }

    .DANEST {
      height: 524px !important;
    }
  }

  @media (min-width: 1200px) {
    margin: 100px 120px 170px 120px;
  }

  @media (min-width: 1500px) {
    margin: 100px 180px 170px 180px;
  }
`;

export default Products;
