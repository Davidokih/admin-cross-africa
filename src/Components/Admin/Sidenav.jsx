import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaCube,
  FaCubes,
  FaDollarSign,
  FaFilePdf,
  FaHome,
  FaUserFriends,
} from "react-icons/fa";
import {
  MdDashboard,
  MdGroup,
  MdInventory,
  MdLogout,
  MdHomeFilled,
  MdSettings,
} from "react-icons/md";
import { TbTransferOut } from "react-icons/tb";
const Sidenav = () => {
  return (
    <div>
      <Container>
        <Side>
          {/* <Text>Menu</Text> */}
          <Wrap>
            <Hold to="/admin-dashboard">
              <MdDashboard color="#0c0c0c" cursor="pointer" />
              <Write>Dashboard</Write>
            </Hold>
            <Hold to="/admin-dashboard/product-categories">
              <MdInventory color="#100f0f" cursor="pointer" />
              <Write> Product categories</Write>
            </Hold>
            <Hold to="/admin-dashboard/merchant">
              <MdGroup color="#0b0b0b" fontSize="18px" cursor="pointer" />
              <Write>Merchants</Write>
            </Hold>
            <Hold to="/admin-dashboard/customers">
              <MdGroup color="#0b0b0b" fontSize="18px" cursor="pointer" />
              <Write>Customers</Write>
            </Hold>
            <Hold to="/admin-dashboard/products">
              <FaCube color="#0c0c0c" fontSize="15px" cursor="pointer" />
              <Write>Product</Write>
            </Hold>
            <Hold to="/admin-dashboard/orders">
              <FaCubes color="#151414" fontSize="18px" cursor="pointer" />
              <Write>Order</Write>
            </Hold>

            <Hold to="/admin-dashboard/settings">
              <MdSettings color="#0a0a0a" fontSize="18px" cursor="pointer" />
              <Write>Settings</Write>
            </Hold>
            <Hold to="/dashboard">
              <TbTransferOut color="#100f0f" fontSize="16px" cursor="pointer" />
              <Write onClick={ () => {
                localStorage.removeItem("user")
              }}>Log out</Write>
            </Hold>
          </Wrap>
        </Side>
      </Container>
    </div>
  );
};

export default Sidenav;
// const Container = styled.div``
const Hold = styled(Link)`
  display: flex;
  align-items: center;
  width: 75%;
  text-decoration: none;
  /* background-color: #762525; */
`;
const Write = styled.div`
  font-weight: bold;
  color: #0b0a0a;
  /* background-color: red; */
  margin-left: 7px;
  width: 100%;
  /* flex: 1; */
  font-size: 13px;
  cursor: pointer;
`;
// const Text = styled.div`
//   padding-left: 15px;
//   font-weight: bold;
//   color: #aaa;
//   font-size: 13px;
//   margin-top: 20px;
// `;
const Wrap = styled.div`
  width: 90%;
  height: 350px;
  margin-top: 23px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: red; */
`;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  justify-content: center;
  align-items: center;
  /* background-color: #935d15; */
`;
const Side = styled.div`
  width: 100%;
  height: 80%;
  /* background-color: #352b1e; */
  padding: 80px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
