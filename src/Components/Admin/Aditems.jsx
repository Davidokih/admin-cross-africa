import React from "react";
import styled from "styled-components";
import { BiPhone } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneOrder } from "../Api/OrderApi";
import moment from 'moment'

const Aditems = () => {
  const {id} = useParams()
    
  const {data} = useQuery({
    queryKey: ["order", id],
    queryFn: ()=>getOneOrder(id)
  })
  var nf = Intl.NumberFormat()
  return (
    <Container>
      <Wrapper>
        <Profile>
          <span> Items</span>
          <div>{moment(data?.createdAt).format('MMMM Do YYYY, h:mm:ss a')} / {data?.products?.length} Items/</div>
          <button>{data?.payment_status }</button>
          <div>Subtotal of all items</div>
          <span>₦{ nf.format(data?.subtotal)}</span>
        </Profile>
        <Tug>
          {
            data?.products?.map((props) => (
              <Box>
            {" "}
            <Image>
              <div>{ props?.productID?.tag_No}</div>
                  <img src={ props?.productID?.avatar[0]?.url} />
                  <span>{ props?.productID?.name}</span>
                  <nav>₦{ nf.format(props?.productID?.price)}</nav>
                  <nav>{ props.qty} items</nav>
              <nav>₦{ nf.format(props?.productID?.price * props?.qty)}</nav>
            </Image>
          </Box>
            ))
          }
          <Box bd>
            {" "}
            <Wrap>
              <span>Subtotal</span>
              <nav>₦{ nf.format(data?.subtotal)}</nav>
            </Wrap>
          </Box>
          <Box>
            {" "}
            <Wrap>
              <span>Shipping fee</span>
              <nav>₦{ nf.format(data?.shippingFee)}</nav>
            </Wrap>
          </Box>
          <Box bd>
            {" "}
            <Wrap>
              <span>Total</span>
              <nav>₦{ nf.format(data?.subtotal + data?.shippingFee)}</nav>
            </Wrap>
          </Box>
        </Tug>
      </Wrapper>
    </Container>
  );
};

export default Aditems;
// const Container = styled.div``
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  width: 99%;
  padding: 15px 24px;
`;

const Box = styled.div`
  width: 100%;
  border-bottom: ${({ bd }) => (bd ? "0px" : "1px solid gray")};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    font-weight: 500;
    font-size: 14px;
  }
  nav {
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
  button {
    background-color: green;
    color: white;
    padding: 7px 15px;
    border: 0;
    outline: 0;
    border-radius: 4px;
  }
  span {
    margin-left: 4px;
    font-weight: 500;
    font-size: 14px;
  }
  div {
    margin-left: 17px;
    font-weight: 400;
    font-size: 14px;
  }
`;
const Tug = styled.div`
  width: 100%;
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
  width: 95%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  background-color: #f3f6f8;
  margin-top: 40px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: flex-start; */
  /* padding: 50px 23px; */
  /* background-color: gold; */
`;
