import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Slider = ({ myRef }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const removeUser = () => {
    localStorage.removeItem("user")
  }
  return (
      <div>
          <Menu ref={myRef}>
          <NavLink to="/electronics" style={{textDecoration: "none"}}><Navs>Electronics</Navs></NavLink>
                <NavLink to="/phone" style={{textDecoration: "none"}}><Navs>Mobile Phones</Navs></NavLink>
                <NavLink to="/clothing" style={{textDecoration: "none"}}><Navs>Clothing & Fashion</Navs></NavLink>
                <NavLink to="/food" style={{textDecoration: "none"}}><Navs>Food & Groceries</Navs></NavLink>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
             { user ? (<>
                   {/* <Navs>Profile</Navs> */}
                  <Navs onClick={removeUser}>Log Out</Navs>
                  </>) : (<>
                    <Navs>Create Account</Navs>
                <Navs>Create Seller</Navs>
                    </>)}
              </Menu>
    </div>
  )
}

export default Slider;

const Menu = styled.div`
  width: 250px;
  height: 100vh;
  background-color: white;
  /* background-color: gold; */
  border-radius: 5px;

  position: fixed;
  top: 0px;
  /* left: 150px; */
  left: -1000px;
  z-index: 1;
  transition: all 350ms ease-in-out;
`;
const Navs = styled.div`
  width: 95%;
  line-height: 4;
  padding-left: 10px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  font-weight: 700;
  transition: all 350ms ease-in-out;
  :hover {
    background-color: lightgray;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
`;