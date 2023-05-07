import React from "react";
import styled from "styled-components";
import { BiPhone } from "react-icons/bi";

const Adorderhistory = () => {
  return (
    <Container>
      <Wrapper>
        <Profile>
          <span> Order History</span>

          <Div>
            <div>Subtotal spent on all items</div>
            <span>₦ 300,000</span>
          </Div>
        </Profile>
        <Tug></Tug>
      </Wrapper>
    </Container>
  );
};

export default Adorderhistory;

// const Profile = styled.div``
const Div = styled.div`
  display: flex;
  div {
    /* margin-left: 17px; */
    font-weight: 400;
    font-size: 14px;
    padding: 0 9px;
  }
  span {
    font-weight: 500;
    font-size: 14px;
  }
`;
const Profile = styled.div`
  padding: 10px 20px;
  border-bottom: 1.9px solid grey;
  width: 94%;
  display: flex;
  justify-content: space-between;

  span {
    margin-left: 4px;
    font-weight: 500;
    font-size: 14px;
  }
`;
const Tug = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 0 20px; */
  /* background-color: red; */
`;

const Image = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  /* background-color: #3f3434; */

  padding: 20px 24px;
  /* border-right: 1.9px solid grey; */
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    /* padding: 0 10px; */
    color: red;
  }
  div {
    font-size: 14px;
    font-weight: 500;
    color: #54c4ea;
  }

  nav {
    font-weight: 400;
    font-size: 13px;
  }
`;
const Wrapper = styled.div`
  width: 700px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  background-color: #f3f6f8;
`;
const Container = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 23px;
`;
