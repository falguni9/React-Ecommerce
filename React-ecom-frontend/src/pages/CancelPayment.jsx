import React,{useEffect} from 'react'
import axios from 'axios'
import {MdOutlineSmsFailed} from "react-icons/md";
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from "react-router-dom";


const CancelPayment = () => {

  const data = {
    orderItem:JSON.parse(localStorage.getItem("RayCart")),
    adderss:JSON.parse( localStorage.getItem("CartAddress")),
    Username:JSON.parse( localStorage.getItem("User-email")),
    SellerEmail:"falguni@gmail.com",
    orderStatus:"failed",
    // OrderCreated:"6499879382964fab3b83cfe8"
   }

  const orderData = () => {
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
      <MdOutlineSmsFailed className='icon'/><br />
     
      <div className='failed'>
      <hr /><br /><br />
      <h1>Payment Failed Order Does'nt placed try again SOORY!</h1>
        <h3>Happy Shoppinggggg </h3>
        <br />
        <br />
        <hr />
        <br />
       
      </div>
      <br />
        <NavLink to = "/product" >
        <Button className='btn btn-sm '> continue shoping </Button>
        </NavLink >
        <NavLink to ="/">
        <Button className='btn btn-clear'> Go TO Home page </Button>
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
  font-size:2.5rem;
 }
 .icon{
  font-size:20rem;
  color:red;
 }

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

export default CancelPayment