import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Products from "./Products";

const index = () => {
  return (
    <main>
      <Header />
      <Wrapper>
        <Products />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  @media (min-width: 1500px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export default index;
