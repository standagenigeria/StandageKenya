import React from "react";
import styled from "styled-components";
import About from "./About";
import Blog from "./Blog";
import Customers from "./Customers";
import Herosection from "./Herosection";
import Newsletter from "../Contact/Newsletter";
import Partners from "./Partners";
import Products from "./Products";
import WhyChooseUs from "./WhyChooseUs";

const Index = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <Herosection />
        <About />
        <Partners />
        <WhyChooseUs />
        {/* <Products/> */}
        {/* <Customers /> */}
        {/* <Blog /> */}
        <Newsletter/>
      </HomeContainer>
    </Wrapper>
  );
};



const HomeContainer = styled.main`
  max-width: 1700px;
  position: relative;
`;

const Wrapper = styled.div`

  @media (min-width: 1700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export default Index;
