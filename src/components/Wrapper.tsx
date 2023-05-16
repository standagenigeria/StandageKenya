import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";

const Wrapper = ({ children }: any) => {
  const location = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    // scroll to top except when you click the back button
    if (navigationType !== "POP" || "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  
  return (
    <Wrap>
      <HomeContainer>
        <Navbar />
        <Outlet />
        <Footer />
      </HomeContainer>
    </Wrap>
  );
};

const HomeContainer = styled.main`
  max-width: 1700px;
  position: relative;
`;

const Wrap = styled.div`
  @media (min-width: 1700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export default Wrapper;
