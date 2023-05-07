import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import {
  FaAmazonPay,
  FaAngleLeft,
  FaApplePay,
  FaCcPaypal,
  FaGooglePay,
} from "react-icons/fa";
import { AiFillAlipayCircle, AiOutlinePayCircle } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

const [QTY, setQTY] = useState()

  const cartData = useSelector((state) => state.reducers.cartItem)
  const totalPrice = cartData?.reduce((price, item)=> price + item.qty * item.price, 0)

  var nf = Intl.NumberFormat()
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Text>Shopping Cart</Text>
            <Tag>
              <Tags>Item</Tags>
              <Price>
                <span>Price </span>
                <span>Quantity</span>
                <span>Total Price</span>
              </Price>
            </Tag>
          </Top>
          {
            cartData?.map((props) => (
              <Middle key={props._id}>
              <Tag>
                  <Image>
                  <img src={props?.avatar[0].url} />
                  <span>
                   {props?.name}
                  </span>
                </Image>
                <Price>
                    <span>₦{props.price }</span>
                    <div>{ props.qty}</div>
                  <span>₦{nf.format(props.qty * props.price) }</span>
                </Price>
              </Tag>
            </Middle>
            ))
         }
          <Down>
            <Hold>
              <span>SUBTOTAL</span>
              <div>₦{nf.format(totalPrice) }</div>
              <Link to="/checkout">
                <Button> Checkout</Button>
              </Link>
              <Icon>
                <BsPaypal color="#0a223a" fontSize="40px" />
                <FaAmazonPay fontSize="40px" />
              </Icon>
            </Hold>
          </Down>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Cart;

const Icon = styled.div`
  width: 130px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 12px 35px;
  border: 0;
  outline: none;
  background-color: #e8559e;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
const Hold = styled.div`
  width: 150px;
  margin-right: 34px;
  span {
    font-size: 18px;
    font-weight: 700;
  }

  div {
    font-size: 13px;
    font-weight: 500;
    margin: 8px 0;
  }
`;
const Price = styled.div`
  display: flex;
  /* width: 20%; */
  display: flex;
  align-items: center;
  span {
    font-size: 13px;
    font-weight: 500;
    margin: 15px;
  }

  div {
    font-size: 13px;
    font-weight: 500;
    border: 1.8px solid black;
    padding: 15px 20px;
  }
`;

const Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 30px 0;
`;
const Image = styled.div`
  width: 380px;
  display: flex;
  img {
    height: 130px;
    width: 240px;
    object-fit: cover;
    border-radius: 5px;
  }

  span {
    font-size: 13px;
    font-weight: 500;
    padding-left: 10px;
  }
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 40px;
`;
const Tags = styled.div`
  margin: 10px;
  font-size: 13px;
  font-weight: 500;
`;
const Tag = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 20px 0;
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 20px 0;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
