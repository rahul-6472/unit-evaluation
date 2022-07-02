import React from 'react'
import styled from "styled-components" 
import {Link} from "react-router-dom"
const Navbar = () => {

    const NavbarWrapper = styled.div`
    position:fixed;
    width:100%;
    top:0;
    left:0;
    background:teal;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:20px;
    color:white;
    padding:20px;
    `

    const StyledLink = styled(Link)`
      color:white;
      text-decoration:none;
      font-size:20px;
    `
  return (
    <NavbarWrapper>
        <StyledLink  to = "/">Home</StyledLink>
        <StyledLink  to = "/Bookings">Bookings</StyledLink>
        <StyledLink  to = "/login">Login</StyledLink>
    </NavbarWrapper>
      

  )
}

export default Navbar
