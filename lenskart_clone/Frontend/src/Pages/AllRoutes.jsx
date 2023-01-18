import React from "react";
import { Route, Routes } from 'react-router-dom'
import Payment from '../Pages/Checkout/payment'
import Pay from "./Payment/pay"

const AllRoutes = () => {
  return <Routes>
    
    <Route path='/shiping' element={<Payment/>}/>
    <Route path="/payment" element= {<Pay/>}/>
    
    
    </Routes>;
};

export default AllRoutes;
