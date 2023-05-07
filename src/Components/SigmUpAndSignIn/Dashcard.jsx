import React from "react";
import styled from "styled-components";
const Dashcard = ({ pr, da, ti, bg,liveProducts,pending, approved }) => {
  return (
    <Container>
      <Top bg={bg}>
        <Text>{ti}</Text>
        <Title>{da}</Title>
      </Top>
      <Bottom>
        <Up>
          <Uptop>
            <Sales>Sales</Sales>
            <Price>{pr}</Price>
          </Uptop>
          <Upbottom>
            <Left>
              <Unit>Order/Unit</Unit>
              <No>
                10 <span>20</span>
              </No>
            </Left>
            <Right>
              <Unit>Return</Unit>
              <No>
                <div>20</div>
              </No>
            </Right>
          </Upbottom>
        </Up>
        <Down>
          <Upbottom>
           {pending &&  <Left>
              <Unit>Pending</Unit>
              <No>
                <div>{ pending}</div>
              </No>
            </Left>}
            <Right>
              <Unit>Cancel Order</Unit>
              <No>
                <div>20</div>
              </No>
            </Right>
          </Upbottom>{" "}
          <Upbottom>
            {liveProducts && <Left>
              <Unit>Live Products</Unit>
              <No>
                <div>{liveProducts }</div>
              </No>
            </Left>}
            {approved && <Right>
              <Unit>Aprroved product</Unit>
              <No>
                <div>{ approved}</div>
              </No>
            </Right>}
          </Upbottom>
        </Down>
      </Bottom>
    </Container>
  );
};

export default Dashcard;
// const Container = styled.div``
const Right = styled.div``;
const Left = styled.div``;
const No = styled.div`
  margin-top: 8px;
  span {
    margin-left: 20px;
  }
  div {
    margin-left: 10px;
  }
`;
const Unit = styled.div``;
const Price = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
const Sales = styled.div`
  font-weight: 500;
  font-size: 12px;
`;
const Uptop = styled.div`
  margin-top: 10px;
`;
const Upbottom = styled.div`
  font-weight: lighter;
  width: 100%;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
`;
const Up = styled.div`
  border-bottom: 1.5px solid grey;
  height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 15px;
  flex-direction: column;
`;
const Down = styled.div`
  border-bottom: 1.5px solid grey;
  height: 110px;
  padding: 15px 15px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: lighter;
  font-size: 13px;
`;
const Text = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
const Bottom = styled.div`
  width: 100%;
  height: 310px;
  background-color: #f5f5f5;
  padding-bottom: 10px;
  border-radius: 0 0 5px 5px;
`;
const Top = styled.div`
  width: 91%;
  height: 40px;
  /* background-color: #3d3dee; */
  background-color: ${({ bg }) => bg};
  /* background-color: ${({ bg }) => (bg ? "#3d3dee" : "grey")}; */
  color: white;
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
`;
const Container = styled.div`
  width: 360px;
  height: 365px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 320px) {
    width: 300px;
  }
  flex-direction: column;
  margin: 20px 20px;
`;
