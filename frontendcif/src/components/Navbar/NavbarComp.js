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

//styles
import "./NavbarStyles.css"


const NavbarComp = () => {
  
  // context
  const userContext = useContext(UserContext);
  const { user } = userContext;
  

  return (
    <>

      <Navbar fluid="true" className="navbar" bg="light" variant="light">
        <Container>
            { !user
            ?
            <>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
              <SignUpModalComp />
              <LoginModalComp />
            </Nav>
            </>
            :
            <>

              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/search">Connect</Nav.Link>
              <LogoutModalComp />

            </>
            }
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp;
