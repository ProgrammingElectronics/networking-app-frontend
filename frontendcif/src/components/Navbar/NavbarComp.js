import React, { useState, useContext } from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

// components
import LoginModalComp from "../ModalComps/LoginModalComp";
import SignUpModalComp from "../ModalComps/SignUpModalComp";
import LogoutModalComp from "../ModalComps/LogoutModalComp";

// context
import UserContext from "../../contexts/UserContext";


const NavbarComp = () => {
  
  // context
  const userContext = useContext(UserContext);
  const { user } = userContext;
  

  return (
    <>
      <Navbar>
        <Container>
          <Nav>
            <>
              <Nav.Link href="/">Home</Nav.Link>
              <SignUpModalComp />
              <LoginModalComp />
              <LogoutModalComp />
            </>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp;
