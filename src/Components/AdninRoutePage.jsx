import React from 'react'
import { Routes } from 'react-router-dom';
import AdminRoutes from "./AllRoutes/AdminRoutes"
import Adpage from './Admin/Adpage';
const SellerRouting = () => {
  return (
    <div>
      {/* <SellerHeader /> */}
      <Adpage />
    </div>
  )
}

export default SellerRouting