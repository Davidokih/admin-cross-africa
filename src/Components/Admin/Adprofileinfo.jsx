import React from "react";
import styled from "styled-components";
import { BiPhone } from "react-icons/bi";
import { getOneOrder } from "../Api/OrderApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Adprofileinfo = () => {

  const {id} = useParams()
  const {data} = useQuery({
    queryKey: ["order", id],
    queryFn: ()=>getOneOrder(id)
  })
  return (
    <Container>
      <Wrapper>
        <Profile>
          <span>Profile Info</span>
        </Profile>
        <Tug>
          <Box>
            {" "}
            <Image>
              <img src="/Frame 113.png" />
              <span>Manel Dix</span>
              <div>Manel@test.com</div>
              <nav>+2349012075964</nav>
            </Image>
          </Box>
          <Box>
            <Info>
              <Uptop>
                <Sales>Last Order</Sales>
                <Price>
                  3 days ago - <span>C000000</span>
                </Price>
              </Uptop>
              <Uptop>
                <Sales>Total Value order</Sales>
                <Price>₦ 300,000</Price>
              </Uptop>
              <Uptop>
                <Sales>Registered</Sales>
                <Price>2 months ago</Price>
              </Uptop>
            </Info>
          </Box>
          <Box bd>
            <Info>
              <Uptop>
                <Sales>Address</Sales>
                <Price>No 4 Heaven's gate Abraham's Estate</Price>
              </Uptop>
              <Uptop>
                <Sales>Country</Sales>
                <Hold>
                  <span>
                    {" "}
                    <BiPhone fontSize="18px" />
                  </span>
                  <Write>Nigeria</Write>
                </Hold>
              </Uptop>
            </Info>
          </Box>
        </Tug>
      </Wrapper>
    </Container>
  );
};

export default Adprofileinfo;
// const Container = styled.div``
const Price = styled.div`
  font-weight: 500;
  font-size: 13px;

  span {
    font-weight: 400;
  font-size: 14px;
    color: #68d0f3;
  }
`;
const Sales = styled.div`
  font-weight: 500;
  font-size: 14px;
`;
const Uptop = styled.div`
  margin: 16px 0;
`;
const Box = styled.div`
  width: 220px;
  height: 230px;
  border-right: ${({ bd }) => (bd ? "0px" : "1px solid gray")};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
`;
const Profile = styled.div`
  padding: 10px 0;
  border-bottom: 1.9px solid grey;
  width: 100%;

  span {
    margin-left: 17px;
    font-weight: 500;
    font-size: 14px;
  }
`;
const Tug = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 20px; */
`;
const Write = styled.div`
  cursor: pointer;
  margin-bottom: 8px;
`;
const Hold = styled.div`
  /* width: 200px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 13px;
  span {
    margin-right: 7px;
    padding: 5px 0;
  }
  /* background-color: red; */
`;
const Info = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-left: 18px;
  margin-bottom: 18px;
`;
const Text = styled.div`
  padding: 7px 0;
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  padding: 20px 43px;

  /* border-right: 1.9px solid grey; */
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    padding: 0 10px;
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
  width: 700px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  background-color: #f3f6f8;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
