import React,{useEffect} from 'react'
import axios from 'axios'

import {AiOutlineFileDone} from "react-icons/ai";
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from "react-router-dom";
import { useCartContext } from '../context/cart_context';
const PaymentSuccess = () => {
  const cart = [];
  const { clearCart} = useCartContext();
  const data = {
    orderItem:JSON.parse(localStorage.getItem("RayCart")),
    adderss:JSON.parse( localStorage.getItem("CartAddress")),
    Username:JSON.parse( localStorage.getItem("User-email")),
    SellerEmail:"falguni@gmail.com",
    orderStatus:"paid",
    
   }

  const orderData = () => {
    localStorage.setItem("RayCart", JSON.stringify(cart));
    axios.post('https://react-backend-ecommerce.onrender.com/reacteccomBack/api/v1/orderCreate',data).then(function (response) {
      console.log(response);
     
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  useEffect(() => {
    orderData();
  },[])
  
  return (
    <SuccessDiv>
    <div className='container'>
 
      <AiOutlineFileDone className='icon'/><br />
      <hr />
      <div className="failed">
      <br /><br />
      <h1>Payment Successful Order placed Sucessfully HURRY!</h1>
        <h3>Thanks for your order</h3>
        <br />
        <br />
        <hr />
        <br />
      </div>
        
        <br />
        <NavLink to = "/product" >
        <Button onClick={clearCart} className='btn btn-sm '> continue shoping </Button>
        </NavLink >
        <NavLink to ="/">
        <Button onClick={clearCart} > Go TO Home page </Button>
        </NavLink>
    </div>
    </SuccessDiv>
  )
}

const SuccessDiv = styled.div`
.container{
  height: 95vh;
  margin:auto ;
  
  text-align: center;
 }
 .failed{
  background-image: url("images/gradient-computer-generated.gif");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-origin: content-box;
 }
 .btn-sm{
  font-size:3rem;
 }
 .btn-clear{
  margin-left:2rem;
  font-size:3rem;
 }
 .icon{
  font-size:20rem;
  color:green;
 }

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;


export default PaymentSuccess