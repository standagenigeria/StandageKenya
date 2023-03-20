import React from 'react';
import image from '../assets/404.svg';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Default = () => {
  const location = useLocation(); 
    return (
      <div className="container">
        <div className="row">
          <div >
            <Header>The Requested URL <span className="text-danger">{location.pathname}</span>{""} Was Not Found</Header>
            <img src={image}  className="img-fluid" style={{width:'70%' }}  alt="404"/>
          </div>
        </div>
      </div>
    )
}

const Header = styled.div `
font-size:16px;
font-weight:normal;
@media(min-width:991px){
  font-weight:bold;
  font-weight:18px;
}
`
export default  Default;