import React from "react";
import styled from "styled-components";
import Adorderinfo from "./Adorderinfo";
import Adprofileinfo from "./Adprofileinfo";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneOrder } from "../Api/OrderApi";

const Adorder = () => {
  const {id} = useParams()
    
  const {data} = useQuery({
    queryKey: ["order", id],
    queryFn: ()=>getOneOrder(id)
  })
  return (
    <Container>
      <Wrapper>
        <Settings>
          Order <span>{ data?.order_No}</span>
        </Settings>
        <Adorderinfo name={ data?.firstName + " " + data?.lastName } email={ data?.email } order_No={ data?.order_No } address={ data?.address } country={ data?.country} />
      </Wrapper>
    </Container>
  );
};

export default Adorder;
// const Container = styled.div``
const Settings = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding: 8px 0;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
`;
