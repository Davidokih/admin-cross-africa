import React from "react"
import styled from "styled-components"
import { BsCart } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const ItemsCard = ({ id, index, name, price,img }) => {
    
    // console.log(id)
    return(
          <Card key={index}>
            <Image>
              <img src={img} />
            </Image>
            <Name>
              {" "}
              <Div to={`/detail/${id}`}>
                {name}
              </Div>
              <Div to="/cart">
                <span>
                  <BsCart />
                </span>
              </Div>
            </Name>
                    <Price>₦{ price}</Price>
          </Card>
    )
}

export default ItemsCard

const Div = styled(NavLink)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`
const Image = styled.div`
  background-color: #cdc8c8;
  border-radius: 5px;
  width: 220px;
  height: 260px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
`;
const Price = styled.div`
  font-size: 13px;
  font-weight: 500;
`;

const Card = styled.div`
  width: 280px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px;
`;
