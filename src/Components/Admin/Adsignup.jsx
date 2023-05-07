import React, { useRef, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Adsignup = () => {
  const [value, setValue] = useState();
  const [Switch, setSwitch] = useState(true);
  const switchIcon = Switch === true ? false : true;

  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Create Account</Title>
          <Text>Please enter every necessary information</Text>
          <InputHold>
            <Hold>
              <Name>First Name</Name>
              <HoldInput>
                <Input placeholder="First Name" />
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Last Name</Name>
              <HoldInput>
                <Input placeholder="Last Name" />
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Email Address</Name>
              <HoldInput>
                <Input placeholder="Email Address" />
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Company Name</Name>
              <HoldInput>
                <Input placeholder="Company Name" />
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Phone Number</Name>
              <HoldInput>
                <PhoneInput
                  className="phone"
                  defaultCountry="NG"
                  placeholder="Phone Number"
                  value={value}
                  onChange={setValue}
                />
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Password</Name>
              <HoldInput>
                <Input
                  placeholder="Password"
                  type={Switch ? "password" : "text"}
                  id="pass"
                />
                <Icon
                  onClick={() => {
                    setSwitch(switchIcon);
                  }}
                >
                  {Switch === false ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </Icon>
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Confirm Password</Name>
              <HoldInput>
                <Input
                  placeholder="Confirm Password"
                  type={Switch ? "password" : "text"}
                  id="pass"
                />
                <Icon
                  onClick={() => {
                    setSwitch(switchIcon);
                  }}
                >
                  {Switch === false ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </Icon>
              </HoldInput>
            </Hold>
            <NavLink to="/personal" style={{ textDecoration: "none" }}>
              <Button>Continue</Button>
            </NavLink>
            <AlText>
              Already have an account?{" "}
              <NavLink
                to="/admin-auth/login"
                style={{ textDecoration: "none" }}
              >
                <span>LogIn</span>
              </NavLink>
            </AlText>
          </InputHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Adsignup;

const AlText = styled.div`
  font-size: 13px;
  font-weight: 500;

  span {
    color: #ec00b1;
    cursor: pointer;
  }
`;
const Button = styled.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;
const Error = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;
const Icon = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const HoldInput = styled.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;

  .PhoneInputInput {
    width: 300px;
    height: 30px;
    outline: none;
    border: 0px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
  /* margin-bottom: 5px; */
  /* padding-left: 10px;
    padding-right: 10px; */
`;
const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Hold = styled.div`
  margin-bottom: 10px;
`;
const InputHold = styled.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
