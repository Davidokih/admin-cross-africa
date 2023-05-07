import React from "react";
import styled from "styled-components";
import Dashboard from "../SigmUpAndSignIn/Dashboard";
import Adheader from "./Adheader";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Merchantrequest from "./Merchantrequest";
import AdmineRoutes from "../AllRoutes/AdminRoutes"

const Adpage = () => {
  return (
    <Container>
      <Side>
        <Sidenav />
        <Adheader />
      </Side>
      <Main>
        <AdmineRoutes />
        {/* <Merchantrequest />  */}
      </Main>
    </Container>
  );
};

export default Adpage;
// const Container = styled.div``
const Container = styled.div`
  width: 100%;
  background-color: #e8e2e2;
  display: flex;
`;
const Side = styled.div`
  width: 230px;
  flex: 0.8;
  height: 100vh;
  background-color: #f262aa;
  border-top-right-radius: 20px;
  position: fixed;
  z-index: 1111;
  @media (max-width: 768px) {
    width: 90px;
  }
  /* position: fixed; */
`;
const Main = styled.div`
  width: calc(100vw - 240px);
  display: flex;
 
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0px;
  /* background-color: blue; */
  @media (max-width: 768px) {
    /* width: 100%; */
    display: none;
  }
`;
