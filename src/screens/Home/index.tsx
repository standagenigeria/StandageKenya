import React from "react";
import styled from "styled-components";
import About from "./About";
import Herosection from "./Herosection";
import Newsletter from "../Contact/Newsletter";

const Index = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <Herosection />
        <About />
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
