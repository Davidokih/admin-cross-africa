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
const OrderPage = ({ index, order_No, price, created, delivery_status, payment_method,tag_No, name,payment_status,quantity,amount,country,address,total,firstName, lastName, category, status, id,isSeller,items,registerd,avatar}) => {
  const [ edit, setEdit ] = useState(false);
  const [userCoubtry, setCountry] = useState({})
  const check = ()=>{
    setCountry(countryData?.find((el)=> el.name === country))
  }
  // console.log(isSeller)
  // console.log(userCoubtry)

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
            {name && <Td>
              <UserHold to={`/admin-dashboard/merchant-detail/${id}`}>
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
        <HoldHead>{ payment_status }</HoldHead>
      </Td> }
      { status && <Td>
        <button className={ `${status}` }>{ status }</button>
            </Td>}
      {address && <Td>
              {" "}
        <HoldHead>{ address}</HoldHead>{" "}
            </Td>}
            {total && <Td>
        <HoldHead>{ total}</HoldHead>{" "}
      </Td> }
      {items && <Td>
              {" "}
        <HoldHead>{ items}</HoldHead>{" "}
            </Td>}
      {category && <Td>
              {" "}
        <HoldHead>{ category}</HoldHead>{" "}
            </Td>}
      {created && <Td>
              {" "}
        <HoldHead>{ created}</HoldHead>{" "}
            </Td>}
      {registerd && <Td>
              {" "}
        <HoldHead>{ registerd}</HoldHead>{" "}
            </Td>}
      {price && <Td>
              {" "}
        <HoldHead>{ price}</HoldHead>{" "}
            </Td>}
          
            
           { registerd &&  <Td>
              <HoldHead >
                {" "}
                <Edit onClick={() => {
                  setEdit(true);
                }}>
                  <Button>
                    Edit
                  </Button>
                  <span>
                    <AiFillCaretDown />
                  </span>
          </Edit>
          {edit ? (
              <Menu
                onClick={() => {
                  setEdit(false);
                }}
              >
                <NavLink  to="/seller-dashboard/edit-image"><Navs>Edit Image</Navs></NavLink>
                <NavLink  to="/seller-dashboard/edit-image"><Navs>Edit Context</Navs></NavLink>
                <Navs>Delete</Navs>
              </Menu>
            ) : null}
        </HoldHead>
       
            </Td>}
           
          </Body>
  );
};

export default OrderPage;

const Navs = styled.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;
`;
const Edit = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Menu = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: sticky;
  bottom: -120px;
  right: 40px;
  /* z-index: 11; */
`;
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
  border-bottom: 1.5px solid #d0d1d2;

`;
const Body = styled.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;