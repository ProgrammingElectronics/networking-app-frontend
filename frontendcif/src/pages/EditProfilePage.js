import { useState, useEffect } from "react"
import { Container, Form, Button } from "react-bootstrap"
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap';
import NavbarComp from "../components/Navbar/NavbarComp"
import "./EditProfilePage.css"
import bootcampAPI from "../api/BootcampAPI"

const EditProfilePage = () => {
  
  let token = localStorage.getItem("auth-user")
  const [bootcampList, setBootcampList] = useState([])
  const [selectedBootcamp, setSelectedBootcamp] = useState([])
  
  useEffect(() => {
    // Get all bootcamps
    const getBootcamps = async () => {
      const allBootcamps = await bootcampAPI.getAllBootcamps(token)
      console.log("EditProfilePage | useEffect | allBootcamps", allBootcamps)
      if(allBootcamps) {
        setBootcampList(allBootcamps)
      }
    }
    getBootcamps()
  },[])



  const bootcampOptions = bootcampList.map((item) => (
    {
      key: item.id,
      label : item.name
    }))

  console.log("bootcampOptions", bootcampOptions)
  
  const otherBootcampOptions = [
    {key: 1, label: 'Code Platoon'}, 
    {key: 2, label:'Parris Island'}, 
    {key: 3, label:'Galvanize'}, 
    {key: 4, label:'Hack Reactor'}
  ]; 
  
  console.log("otherBootcampOptions", otherBootcampOptions)
  
  return (

    <div>
      <Container fluid>
            <NavbarComp />
      </Container>
      <h1 id="edit-profile-banner">EDIT PROFILE</h1>
      <div id="edit-profile-content-area">
        <div id="edit-profile-spacer-left"></div>
        <Form>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            
            <DropdownMultiselect
                options={otherBootcampOptions}
                name="bootcamps"
                placeholder="Select Bootcamp"
                handleOnChange={(selected) => {
                  setSelectedBootcamp(selected)
                }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
          Submit
          </Button>
        </Form>
        <div id="edit-profile-spacer-right"></div>
      </div>
    </div>
  )
}

export default EditProfilePage