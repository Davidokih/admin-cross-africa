import React from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";

import { getAllProduct } from "../Api/ProductApi";
import ItemsCard from "./ItemsCard"
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Allitems = () => {

  const { data } = useQuery({
    queryKey: [ "products" ],
    queryFn: getAllProduct
    
  })
  const [ currentPage, setCurrentPage ] = useState(0)

  const recordPage = 8
  const lastIndex = currentPage * recordPage
  const currentPageData = data?.slice(lastIndex, lastIndex + recordPage)

  const filteredData = currentPageData?.filter((el) => el.category === "phone")
  const filteredElectronics = currentPageData?.filter((el) => el.category === "electronics")
  const filteredFood = currentPageData?.filter((el) => el.category === "food")
  const filteredCloths = currentPageData?.filter((el) => el.category === "clothing")
  // console.log(filteredData)
  var nf = Intl.NumberFormat()
  return (
    <Container>
      <Wrapper>
        <Downtitle>Mobiles</Downtitle>
        <Cardhold>
        {
        filteredData?.map((props, index) => (
          <ItemsCard id={ props._id } index={index} name={ props.name } price={ nf.format(props?.price) } img={ props?.avatar[0].url} />
        ))
        }
      </Cardhold>
        <Button to="/phone">
          <button>See All</button>
        </Button>
      </Wrapper>
      <Wrapper>
        <Downtitle>Home Appliances</Downtitle>
        <Cardhold>
          
        {
        filteredElectronics?.map((props, index) => (
          <ItemsCard id={ props._id } index={index} name={ props.name } price={ nf.format(props?.price) } img={ props?.avatar[0].url} />
        ))
        }
      </Cardhold>
        <Button to="/electronics">
          <button>See All</button>
        </Button>
      </Wrapper>
      <Wrapper>
        <Downtitle>Accessories</Downtitle>
        <Cardhold>
          
          {
          filteredCloths?.map((props, index) => (
            <ItemsCard id={ props._id } index={index} name={ props.name } price={ nf.format(props?.price) } img={ props?.avatar[0].url} />
          ))
          }
        </Cardhold>
        <Button to="/clothing">
          <button>See All</button>
        </Button>
      </Wrapper>
      <Wrapper>
        <Downtitle>Foodstuffs</Downtitle>
        <Cardhold>
          {
          filteredFood?.map((props, index) => (
            <ItemsCard id={ props._id } index={index} name={ props.name } price={ nf.format(props?.price) } img={ props?.avatar[0].url} />
          ))
          }
        </Cardhold>
          <Button to="/food">
            <button>See All</button>
          </Button>
      </Wrapper>
    </Container>
  );
};

export default Allitems;
const Button = styled(NavLink)`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  button {
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 15px;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`;
const Downtitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`;
const Cardhold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
