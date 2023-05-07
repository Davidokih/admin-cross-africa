import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../Api/Api";

const Adlogin = () => {
  const [Switch, setSwitch] = useState(true);
  const switchIcon = Switch === true ? false : true;

  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Log In</Title>
          <InputHold>
            <Hold>
              <Name>Email Address</Name>
              <HoldInput>
                <Input placeholder="Email Address" type="email" />
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Password</Name>
              <HoldInput>
                <Input
                  placeholder="Password"
                  type={Switch ? "password" : "text"}
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
            <PassHold>Forget Password?</PassHold>
            <Button>Log In</Button>
            <AlText>
              Don't have an account?{" "}
              <NavLink to="/admin-auth/user" style={{ textDecoration: "none" }}>
                <span>Sign Up</span>
              </NavLink>
            </AlText>
          </InputHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Adlogin;

const PassHold = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;
  width: 360px;
`;
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

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 700;
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
