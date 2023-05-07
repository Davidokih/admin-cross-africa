import React from "react";
import { BiFridge } from "react-icons/bi";
import { FaMobileAlt, FaShirtsinbulk, FaVest } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Uniheader from "../SigmUpAndSignIn/Uniheader";
import pic1 from "../Assets/realme 2 pro front.png"
import Pic2 from "../Assets/Fashion.png"
import Pic3 from "../Assets/Computer.png"
import Pic4 from "../Assets/Food (1).png"

const Uploads = () => {
  return (
    <Container>
      <Uniheader />
      <Wrap>
        <Cont>
          <Image src={pic1 } />
          <Link to="/seller-dashboard/uploading" style={{ textDecoration: "none", color: "black" }}>
            <span>Mobiles</span>
          </Link>
        </Cont>
        <Cont>
        <Image src={Pic2 } />
        <Link to="/seller-dashboard/upload-cloths" style={{ textDecoration: "none", color: "black" }}>
            <span>Clothings</span>
          </Link>
        </Cont>
        <Cont>
        <Image src={Pic3 } />
        <Link to="/seller-dashboard/upload-electronics" style={{ textDecoration: "none", color: "black" }}>
            <span>Electronics</span>
          </Link>
        </Cont>
        <Cont>
        <Image src={Pic4 } />
        <Link to="/seller-dashboard/upload-foods" style={{ textDecoration: "none", color: "black" }}>
            <span>Foods And Groceries</span>
          </Link>
        </Cont>
      </Wrap>
    </Container>
  );
};

export default Uploads;
// const Container = styled.div``
const Image = styled.img`

`

const Cont = styled.div`
  width: 360px;
  height: 365px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background: rgba(47, 128, 237, 0.37);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  justify-content: center;
  @media (max-width: 320px) {
    width: 300px;
  }
  flex-direction: column;
  margin: 20px 20px;
  span {
    font-size: 19px;
    font-weight: 500;
    margin-top: 15px;
  }
`;
const Wrap = styled.div`
  width: 87%;
  border-top: 1.8px solid grey;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  } */
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
