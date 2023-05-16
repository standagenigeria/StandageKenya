import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Partners from "./Partners";
import Team from "./Team";
import Values from "./Values";

const index = () => {
  return (
    <Wrapper>
      <About>
        <Header />
        <Values />
        {/* <Team /> */}
        <Partners/>
      </About>
    </Wrapper>
  );
};

const About = styled.main`
  max-width: 2500px;
`;

const Wrapper = styled.div`
  @media (min-width: 2500px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export default index;
