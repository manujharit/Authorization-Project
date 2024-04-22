import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import sidebg from '../../assets/sidebg.png';

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const SideImage = styled.img`
  width: 90%;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  height: 400px;
  width: 400px;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const Body = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <BodyContainer>
      {isMobileOrTablet && (
        <div className="side-image-container">
          <SideImage src={sidebg} alt="Sample" />
        </div>
      )}
      <FormContainer>
        <Outlet />
      </FormContainer>
    </BodyContainer>
  );
};

export default Body;