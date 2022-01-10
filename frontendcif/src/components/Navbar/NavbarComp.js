import React, { useContext } from "react";
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            { !user
            ?
            <>
              <Nav.Link href="/">Home</Nav.Link>
              <SignUpModalComp />
              <LoginModalComp />
            </>
            :
            <>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/search">Connect</Nav.Link>
            <LogoutModalComp />
            </>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp;
