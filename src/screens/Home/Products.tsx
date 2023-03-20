import React, { useState } from "react";
import styled from "styled-components";
import Vehicles from "../../assets/vehicle.png";
import Laptops from "../../assets/used-laptop.png";
import Battery from "../../assets/battery.png";
import Beauty from "../../assets/kaminomoto.png";
import Robotics from "../../assets/robotics-line.png";
import Healthcare from "../../assets/healthcare.png";

const Products = () => {
  const [ActiveProduct, setActiveProduct] = useState({
    name: "Used Vehicles",
    details:
      "Lead supplier of high-quality automobiles (suzuki-every and Hiace buses) imported from Japan.",
    image: Vehicles,
  });

  const AllProducts = [
    {
      name: "Used Vehicles",
      details:
        "Lead supplier of high-quality automobiles (suzuki-every and Hiace buses) imported from Japan.",
      image: Vehicles,
    },
    // {
    //   name: "Used Laptops",
    //   details:
    //     "We have variety of laptop brands, including HP, Dell, Macbook, Fujitsu, Acer, and Toshiba from Japan.",
    //   image: Laptops,
    // },
    // {
    //   name: "Solar Batteries",
    //   details: "We offer high-quality batteries in partnership with GSYuasa",
    //   image: Battery,
    // },
    // {
    //   name: "Beauty & Cosmetics",
    //   details:
    //     "Our Beauty line is designed to rejuvenate, nourish, and regrow hair.",
    //   image: Beauty,
    // },
    // {
    //   name: "Robotics ",
    //   details:
    //     "We provide kits that can be easily assembled with detailed tutorials to help children learn about robotics and programming concepts.",
    //   image: Robotics,
    // },
    // {
    //   name: "Healthcare Solution",
    //   details:
    //     "We have wide range of quality health care equipments such as radiology equipments, medical devices and IT Solutions.",
    //   image: Healthcare,
    // },
  ];

  const ImageCard = () => (
    <div className="card">
      <div className="grouped">
          <img src={ActiveProduct.image} alt="" />
          <h3>{ActiveProduct.name}</h3>
          <p>{ActiveProduct.details}</p>
      </div>
    </div>
  );

  return (
    <ProductContainer>
      <div className="masked">
        <h2>Our Products</h2>
        <p>Discover the wide range of products we offer.</p>
        <div className="product__box">
          {AllProducts.map((product, index) => (
            <div className="all__products" key={product.name}>
              <input
                onChange={() => setActiveProduct(product)}
                type="radio"
                name={product.name}
                id={product.name}
                checked={ActiveProduct.name === product.name}
                value={product.name}
              />
              <label htmlFor={product.name}>{product.name}</label>
            </div>
          ))}
        </div>
      </div>
      <ImageCard />
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: var(--mainPurple);
    margin-bottom: 5px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--fontColor);
  }
  .product__box {
    display: flex;
    margin-top: 24px;
    flex-wrap: wrap;
  }
  .all__products {
    width: 170px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    label:hover, input:hover {
    cursor: pointer;  
    }

    label {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: var(--mainPurple);
      margin-left: 10px;
    }

    input[type="radio"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #e6e6e6;
      margin: 0;
      font: inherit;
      color: currentColor;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      transform: translateY(-0.075em);
      display: grid;
      place-content: center;
    }

    input[type="radio"]::before {
      content: "";
      width: 16px;
      height: 16px;
      border: 1px solid var(--mainOrange);
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background-color: var(--mainOrange);
    }

    input[type="radio"]:checked::before {
      transform: scale(0.75);
    }

    input[type="radio"]:focus {
      outline: max(2px, 0.15em) solid var(--mainOrange);
      outline-offset: max(2px, 0.15em);
    }
  }
  .card {
    margin-top: 30px;
    padding: 49px 24px;
    background: #fffaf4;

    .grouped {
      display: flex;
      align-items: center;
      flex-direction: column;
      background: #ffffff;
      padding: 24px;
      border: 0.4025px solid #b3b3b3;
      border-radius: 3.22px;
    }
    h3,
    p {
      text-align: center;
    }
    h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: var(--mainPurple);
      animation: slideIn 0.5s ease forwards;
      transition: all 0.5s ease;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: var(--fontColor);
      animation: slideIn 0.5s ease forwards;
      transition: all 0.5s ease;
    }
    img {
      object-fit: cover;
      height: 147.59px;
      margin-bottom: 24px;
      animation: slideIn 0.5s ease forwards;
      transition: all 0.5s ease;
    }
  }

  @media (min-width: 850px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    .all__products {
      width: 200px !important;
    }
    .masked {
      .product__box {
        flex-direction: column;
        margin: 0;
      }
      align-self: flex-start;
      p {
        margin-bottom: 80px;
      }
    }
    .card {
      width: 526px;
      margin: 0;
      padding: 70px;
    }
  }
`;

export default Products;
