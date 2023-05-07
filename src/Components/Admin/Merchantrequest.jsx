import React from "react";
import styled from "styled-components";
import Productpage from "../SigmUpAndSignIn/Productpage";

const Merchantrequest = () => {
  return (
    <Container>
      <Wrapper>
        <Settings>New Merchant Request</Settings>
        <Productpage />
      </Wrapper>
    </Container>
  );
};

export default Merchantrequest;
// const Container = styled.div``
const Settings = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding: 8px 0;
`;
const Wrapper = styled.div`
  width: 95%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
`;
