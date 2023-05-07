import React from "react";
import styled from "styled-components";
import Dashcard from "./Dashcard";
import Uniheader from "./Uniheader";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct, sellerProducts } from "../Api/ProductApi";
const Dashboard = () => {

  const check = JSON.parse(localStorage.getItem("user"))
  const id = check._id
  const { data } = useQuery({
    queryKey: [ "products" ],
    queryFn: ()=>sellerProducts(id)
  })
  const pending = data?.filter((el) => el.status === "pending").length
  const approved = data?.filter((el) => el.status === "approved").length
  const liveProducts = data?.filter((el) => el.quantity > 0).length
  console.log(pending)

  return (
    <Container>
      <Uniheader />
      <Wrap>
        <Dashcard pr="₦100,000" da="Mar 16" ti="Today" bg="#3d3dee" pending={ pending } approved={ approved } liveProducts={ liveProducts} />
        <Dashcard pr="₦60,000" da="Mar 15" ti="Yesterday" bg="grey" />
        <Dashcard
          pr="₦220,000"
          da="Mar 1 - Mar 16"
          ti="Month to date"
          bg="purple"
        />
        <Dashcard
          pr="₦400,000"
          da="Feb 1 - Feb 29"
          ti="Last month"
          bg="orange"
        />
      </Wrap>
    </Container>
  );
};

export default Dashboard;
// const Container = styled.div``
// const Container = styled.div``
const Wrap = styled.div`
  width: 87%;
  border-top: 1.8px solid grey;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: gold; */

  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
