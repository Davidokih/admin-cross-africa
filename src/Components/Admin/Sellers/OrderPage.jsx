import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  AiFillCaretDown,
} from "react-icons/ai";
import "../../../App.css"
import countryData from "../../data"
import "../style.css"
const OrderPage = ({ avatar, index, order_No, price, created, delivery_status, payment_method,tag_No, name,payment_status,quantity,amount,country,address,total,firstName, lastName, category, status, id,isSeller, qty}) => {
  const [ edit, setEdit ] = useState(false);
  const [userCoubtry, setCountry] = useState({})
  const check = ()=>{
    setCountry(countryData?.find((el)=> el.name === country))
  }
  const productData = qty?.filter((el)=> el.sellerID === id)
  // console.log(id)
  // console.log(productData)

  useEffect(()=>{
    check()
  },[])
  return (
          <Body key={index} >
            {tag_No && <Td>
              {" "}
        <HoldHead>{ tag_No}</HoldHead>{" "}
            </Td>}
            {order_No && <Td>
              {" "}
        <HoldHead>{order_No }</HoldHead>
            </Td>}
            {country && <Td>
              {" "}
        <HoldHead><img src={userCoubtry?.flag } /></HoldHead>
            </Td>}
            
            {avatar && <Td>
              <UserHold>
                <span>
            <Image src={ avatar} />
                </span>
               {name}
              </UserHold>
            </Td>}
            {firstName && <Td>
              {isSeller ? <UserHold to={`/admin-dashboard/merchant-detail/${id}`}>
                <span>
            <Img>{firstName?.charAt(1).toUpperCase() + lastName?.charAt(1).toUpperCase()}</Img>
                </span>
               {firstName +" "+ lastName}
              </UserHold> : <UserHold to={`/admin-dashboard/order-detail/${id}`}>
                <span>
            <Img>{firstName?.charAt(1).toUpperCase() + lastName?.charAt(1).toUpperCase()}</Img>
                </span>
               {firstName +" "+ lastName}
              </UserHold>}
            </Td>}
            
            {quantity && <Td>
        <HoldHead>{ quantity}</HoldHead>{" "}
      </Td> }
      {delivery_status &&  <Td>
        <HoldHead className={`${delivery_status}`}>{ delivery_status}</HoldHead>
            </Td>}
      { payment_method && <Td>
        <HoldHead>{ payment_method }</HoldHead>
      </Td> }
      { amount && <Td>
        <HoldHead>{ amount }</HoldHead>
      </Td> }
      { payment_status && <Td>
        <HoldHead>
        { payment_status === "paid" ? <button style={{padding: "10px", border: "0px", backgroundColor: "green", color: "white", borderRadius: "5px"}}>Yes</button> : <button style={{padding: "10px", border: "0px", backgroundColor: "lightgray", color: "white", borderRadius: "5px"}}>No</button>}
        </HoldHead>
      </Td> }
      {status && <Td>
              {" "}<button className={`${status}`}>{status}</button>
            </Td>}
      {address && <Td>
              {" "}
        <HoldHead>{ address}</HoldHead>{" "}
            </Td>}
            {total && <Td>
        <HoldHead>{ total}</HoldHead>{" "}
      </Td> }
      {created && <Td>
              {" "}
        <HoldHead>{ created}</HoldHead>{" "}
            </Td>}
      {qty && <Td>
        { " " }
        { productData?.map((el => (
          <HoldHead>{ el.qty}</HoldHead>
        )))}
        
            </Td>}
            {price && <Td>
        { " " }
        { productData?.map((el => (
          <HoldHead>{ el.price}</HoldHead>
        )))}
        
            </Td>}
          
            
      
           
          </Body>
  );
};

export default OrderPage;


const Img = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d1d0cb;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  margin-right: 10px;
`;
const Button = styled.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;
const Hold = styled.div``;
const HoldHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
  img{
    width: 40px;
  }
`;
const UserHold = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;

  :hover {
    color: #ff00ea;
  }
  cursor: pointer;
`;
const Td = styled.td`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`;
const Body = styled.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;