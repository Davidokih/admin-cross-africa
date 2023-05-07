import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"

const Category = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>Buying & Selling made easy accross Africa!</Head>
          <Holder>
            <Card>
              <Imaged>
                <TextHold>
                  <Title>Electronics.</Title>
                  <Content>
                    Buying made easy, get TV, home theatre, system and
                    electronics at the comfort of your home.
                  </Content>
                  <NavLink to="/allitems" style={{textDecoration: "none", color: "white"}}><Button>Buy Now</Button></NavLink>
                </TextHold>
              </Imaged>
            </Card>
            <Card>
              {/* <img src="/Frame 2.png" /> */}

              <Images>
                <TextHold>
                  <Title>Mobile Phones.</Title>
                  <Content>
                    Buying made easy, get used phones, laptops, chargers etc..
                    at the comfort of your home
                  </Content>
                  <NavLink to="/allitems" style={{textDecoration: "none", color: "white"}}><Button>Buy Now</Button></NavLink>
                </TextHold>
              </Images>
            </Card>
            <Card>
              <Imagee>
                <TextHold>
                  <Title>Clothing & Fashion.</Title>
                  <Content>
                    Buying made easy, get Trendy and classic wears at the
                    comfort of your home.
                  </Content>
                  <NavLink to="/allitems" style={{textDecoration: "none", color: "white"}}><Button>Buy Now</Button></NavLink>
                </TextHold>
              </Imagee>
            </Card>
            <Card>
              <Image>
                <TextHold>
                  <Title>Food & Groceries.</Title>
                  <Content>
                    Buying made easy, food and groceries are all available, get
                    them all at the comfort of your home.
                  </Content>
                  <NavLink to="/allitems" style={{textDecoration: "none", color: "white"}}><Button>Buy Now</Button></NavLink>
                </TextHold>
              </Image>
            </Card>
          </Holder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Category;

const Button = styled.button`
  margin-bottom: 20px;
  border: 0px;
  outline: none;
  background: #ee65cc;
  padding: 10px 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 115.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Imaged = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 112.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Images = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 113.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Imagee = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 114.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const TextHold = styled.div`
  /* background-color: gold; */
  margin-bottom: 20px;
`;
const Card = styled.div`
  width: 400px;
  height: 650px;
  color: white;
  padding: 0px 18px;
  margin: 10px;

  display: flex;
  align-items: flex-end;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
  }
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Head = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 300px;
  /* color: ; */
`;
const Wrapper = styled.div`
  width: 90%;
  margin-top: 30px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`;
