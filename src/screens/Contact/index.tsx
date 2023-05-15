import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Header from "./Header";

const index = () => {
  return (
    <Wrapper>
      <Contact>
        <Header />
        {/* <Form /> */}
      </Contact>
    </Wrapper>
  );
};

const Contact = styled.main`
max-width: 1700px;
`;
const Wrapper = styled.div`
  @media (min-width: 1700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export default index;
