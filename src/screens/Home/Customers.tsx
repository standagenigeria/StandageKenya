import React from "react";
import styled from "styled-components";
import Customer from "../../assets/customer.jpg";
import partner12 from "../../assets/partners/12.png";
import partner19 from "../../assets/partners/19.png";

const Customers = () => {
  const customers = [
    {
      name: " Mr Chinedu Okoli",
      Comment:
        "Standage is a reliable company. I got my goods in perfect condition. I have recommended them to my friends",
      // image: Customer,
    },
    {
      // name: "Marubeni",
      Comment:
        "Standage has been a reliable and professional partner, delivering high-quality services on time. They have helped us streamline our operations and exceed our expectations.",
      image: partner12,
    },
    {
      // name: "Artec Robo",
      Comment:
        "Thanks to Standage, our business was able to expand its product range and connect with Nigerian companies easily through their efficient digital platforms for international trade.",
      image: partner19,
    },
  ];

  return (
    <CustomerContainer>
      <div className="wrapper">
        <div className="top__section">
          <h2>1 Million+ customers</h2>
          <p className="subtitle">
            Since launching in 2017, 0ver 1 million people have patronised us.
            Read what some of them said here.
          </p>
        </div>
        <div className="slider">
          {customers.map((customer) => (
            <div className="card" key={customer.name}>
              <p>“{customer.Comment}”</p>
              <div className="card__footer">
                {customer.name ? 
                <p> {customer.name} </p>
                : "" }
                {customer.image ? (
                  <img src={customer.image} alt="customer" />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CustomerContainer>
  );
};

const CustomerContainer = styled.div`
  /* mobile screen  */
  background: var(--mainBlack);
  padding: 89px 24px 120px 24px;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 10px;
    color: var(--mainOrange);
  }

  .subtitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #f2f2f2;
    margin-bottom: 40px;
  }

  .card {
    min-width: 70vw;
    padding: 16px 23px;
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.15);

    img {
      width: 100px;
      /* height: 50px; */
      border-radius: 50%;
      object-fit: contain;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: var(--mainPurple);
    }
    .card__footer {
      display: flex;
      width: 100%;
      margin-top: 16px;
      justify-content: flex-end;
      align-items: center;
      p {
        font-weight: 500;
        font-size: 14px;
        margin-top: 53px;
        line-height: 20px;
        color: var(--fontColor);
      }
    }
  }

  .card + .card {
    margin-left: 10px;
  }

  .slider {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 400px) {
    .card {
      min-width: 330px;
      height: 250px;
    }
    .subtitle {
      width: 80%;
    }
  }

  /* big screen  */
  @media (min-width: 768px) {
    .card + .card {
      margin-left: 40px;
    }
    .slider {
      padding-top: 80px;
    }

    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
    }
    .subtitle {
      font-weight: 500;
      font-size: 16px;
      width: 57%;
      line-height: 28px;
    }
  }

  @media (min-width: 1200px) {
    padding: 120px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .wrapper {
      width: 1100px;
    }
  }
`;

export default Customers;
