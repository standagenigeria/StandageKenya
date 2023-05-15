import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import brand from "../assets/brand.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  useEffect(() => {
    setIsActive(splitLocation[1]);
    // console.log(isActive);
  }, [isActive, splitLocation]);

  return (
    <Container>
      <div className="desktop">
        <Link to="/">
          <img src={brand} alt="standage" />{" "}
        </Link>
        <div>
          <nav className="nav__links">
            <Link to="/" className={isActive === "" ? "active" : ""}>
              Home
            </Link>
            <Link to="/about" className={isActive === "about" ? "active" : ""}>
              About us
            </Link>
            {/* <Link
              to="/merchandise"
              className={isActive === "merchandise" ? "active" : ""}
            >
              Merchandise
            </Link>
            <Link to="/blog" className={isActive === "blog" ? "active" : ""}>
              Blog
            </Link> */}
            <Link
              to="/contact-us"
              className={isActive === "contact-us" ? "active" : ""}
            >
              Contact Us
            </Link>
          </nav>
          <div className="menu__icon">
            {isOpen ? (
              <AiOutlineCloseCircle className="close" onClick={toggle}/>
            ) : (
              <FiMenu onClick={toggle} />
            )}
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="mobile">
          <nav className="navlinks">
            <Link to="/" onClick={toggle}>
              Home
            </Link>
            <Link to="/about" onClick={toggle}>
              About us
            </Link>
            <Link to="/merchandise" onClick={toggle}>
              Merchandise
            </Link>
            <Link to="/blog" onClick={toggle}>
              Blog
            </Link>
            <Link to="/contact-us" onClick={toggle}>
              Contact Us
            </Link>
          </nav>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 37px 10px 37px;
  background: var(--mainBlack);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  a {
    color: white;
    font-size: 14px;
    line-height: 20px;
    :hover {
      font-weight: 600;
    }
  }
  .active,
  :focus {
    color: var(--mainOrange);
    font-weight: 600;
  }

  /* large screen */
  .desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a + a {
      margin-left: 25px;
    }
    img {
      width: 134.58px;
      object-fit: cover;
    }
    .menu__icon {
      display: none;
      @media (max-width: 768px) {
        display: block;
        svg {
          color: white;
          width: 28px;
          height: 28px;
          :hover {
            cursor: pointer;
          }
        }
        svg.close{
          width: 32px;
          height: 32px;
        }
      }
    }
    @media (max-width: 768px) {
      /* padding: 32px 73px 13px 73px; */
      .nav__links {
        display: none;
      }
    }
  }

  //maximum screen size
  @media (min-width: 1500px) {
    padding: 32px 73px 13px 73px;
    display: flex;
    align-items: center;
    justify-content: center;

    .desktop {
      width: 1500px;
    }
  }

  /* small screen */
  .mobile {
    a {
      color: white;
      font-size: 16px;
      line-height: 28px;
    }
    .navlinks {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 37px;
      a + a {
        margin-top: 25px;
      }
    }
    @media (max-width: 768px) {
      height: 714px;
    }
  }
`;

export default Navbar;
