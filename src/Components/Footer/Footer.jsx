import React from 'react'
import styled from "styled-components"
import {FaFacebookF, FaTwitter} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Hold>
            <Head>Categories</Head>
            <Content>
              <Nav>Home Appliances and Founiture</Nav>
              <Nav>Food Items</Nav>
            </Content>
          </Hold>
          <Hold>
            <Head>Important Links</Head>
            <Content>
              <Nav>Terms & Conditions</Nav>
              <Nav>Return & Exchange</Nav>
              <Nav>Shipping & Deliveries</Nav>
              <Nav>Privacy Policies</Nav>
            </Content>
          </Hold>
          <Hold>
            <Head>Information</Head>
            <Content>
              <Nav>About Us</Nav>
              <Nav>Contact Us</Nav>
              <Nav>Blog</Nav>
              <Nav>Stories</Nav>
              <Nav>FAQ</Nav>
            </Content>
          </Hold>
          <Hold>
            <Head>Socials</Head>
            <Content>
              <Nav>
                <span><FaFacebookF size="16px"/></span>
                Facebook
              </Nav>
              <Nav>
                <span><FaTwitter size="16px"/></span>
                Twitter
              </Nav>
              <Nav>
                <span><AiFillInstagram size="16px"/></span>
                Instagram
              </Nav>
            </Content>
          </Hold>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Footer

const Nav = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #4a4747;
  margin-bottom: 10px;

  span{
    margin-right: 10px;
  }
`
const Content = styled.div``
const Head = styled.div`
  font-size: 25px;
  font-weight: 800;
  color: #232121;
  margin-bottom: 20px;
`
const Hold = styled.div``
const Wrapper = styled.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  border-top: 2px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  /* background-color: gold; */

`;