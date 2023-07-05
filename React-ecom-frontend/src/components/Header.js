import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import {MdElectricalServices} from "react-icons/md";
const Header = () => {
  return (
    <MainHeader>
      <NavLink   className="logo"  to="/">

        <img src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1687868570/react%20ecoom%20logo/ray-logo_lj2smb.png" alt="my logo img" className="logo-image" />
        <h2  className="logo-name " >
          <sub className="logo-name " >Ray</sub>
          <MdElectricalServices className="logo-name logo-icon"/>
          <sup className="logo-name ">Electronics</sup>
        </h2>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background:#182e78; 
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  
  top: 0;
  width: 100vw;
  z-index: 222;
  margin-bottom: 10rem;
  .logo {
    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-image{
    height: 5rem;
    border-radius:50%
  }
  .logo-name{
    margin-left:1rem;
    font-weight:700;
    background-image: url("images/newgif.gif");
    background-color: #cccccc;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    // background: -webkit-linear-gradient(#f7ef07, #eeedf2,#23f707);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .logo-icon{
    color:white;
  }
 
`;
export default Header;
