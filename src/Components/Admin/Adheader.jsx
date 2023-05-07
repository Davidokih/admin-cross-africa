import React from "react";
import { BsBellFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

import styled from "styled-components";
const Adheader = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Account>
            <BiUserCircle fontSize="22px" />
            <span>Manel</span>
          </Account>
          <BsBellFill fontSize="18px" />
        </Hold>
        <SearchHold>
          <button>
            <BiSearch fontSize="20px" />
          </button>
          <input />
        </SearchHold>
      </Wrapper>
    </Container>
  );
};

export default Adheader;
// const Container =styled.div``
const Account = styled.div`
  width: 190px;
  height: 40px;
  border-radius: 20px;
  background-color: #f9d0e4;
  margin: 0 6px;
  display: flex;
  align-items: center;
  padding: 0 2px;
  span {
    font-size: 14px;
    font-weight: 500;
    padding: 0 10px;
  }
`;
const Hold = styled.div`
  width: 200px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchHold = styled.div`
  width: 340px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: #f9d0e4;
  padding: 0 3px;
  /* justify-content: center; */

  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    background-color: transparent;
  }
  button {
    width: 40px;
    height: 40px;
    border: 0px;
    outline: none;
    display: flex;
    align-items: center;
    background-color: transparent;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* border-bottom: 1.9px solid grey; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 10px; */
`;
const Container = styled.div`
  width: calc(100% - 230px);
  height: 70px;
  border-bottom: 1.9px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  /* padding-bottom: 160px; */
  /* position: absolute; */
  right: 0px;
  top: 0px;
  background-color: white;
  @media (max-width: 660px) {
    display: none;
  }
`;
