import React from 'react'
import styled from 'styled-components'
import Adorderinfo from '../Adorderinfo';
import SellerPage from "./SellerPage"
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneUser } from '../../Api/Api';
import SellerTransaction from "../Sellers/SellerTransaction"

const OrderDetail = () => {

    const {id} = useParams()
    console.log(id)
    const {data} = useQuery({
      queryKey: ["user", id],
      queryFn: ()=>getOneUser(id)
    })

    return (
        <Container>
            <Wrapper>
        <Settings>
          Merchant
        </Settings>
                <Adorderinfo name={ data?.firstName + " " + data?.lastName } email={ data?.email } address={ data?.address } country={ data?.country } phoneNum={ data?.phoneNum } shippingFrom={ data?.shippingFrom} address2={ data?.address2 }/>
      </Wrapper>
           
        <SellerPage />
        <SellerTransaction />
        </Container>
    )
}

export default OrderDetail

const Settings = styled.div`
  font-size: 15px;
  font-weight: 700;
  /* padding: 8px 0; */
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 95%;
`;

const Container = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 90px;
`;
