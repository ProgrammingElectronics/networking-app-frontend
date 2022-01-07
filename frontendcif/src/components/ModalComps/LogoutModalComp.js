import { useState, useContext } from "react";
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Nav from "react-bootstrap/Nav"

// context
import UserContext from "../../contexts/UserContext";

const LogoutModalComp = () => {

  // context
  const userContext = useContext(UserContext);
  const { setUserLogout } = userContext

  // to show modal
  const [showLogout, setShowLogout] = useState(false);

  // to handle showing/closing modal
  const handleShowLogout = () => setShowLogout(true);
  const handleCloseLogout = () => setShowLogout(false);

  // close modal AND logout
  const handleCloseAndLogout = () => {
    handleCloseLogout()
    setUserLogout()
  }

  return (
    <>
      <Nav.Link onClick={handleShowLogout}>Logout</Nav.Link>
      <Modal show={showLogout} onHide={handleCloseLogout}>
        <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>We're sad to see you go!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLogout}>
            Close
            </Button>
            <Button variant="primary" onClick={handleCloseAndLogout}>
            Confirm Logout
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LogoutModalComp;
