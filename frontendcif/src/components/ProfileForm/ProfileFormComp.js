import { React, useState } from 'react'
import { Form, Row, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap'

//style
import "./ProfileFormStyels.css"

const ProfileFormComp = () => {
    //need a useState array for each selection field (i.e. industries, languages, etc.) to pass to database
    //add required=True for model fields that can't be blank
    //handleFormSubmit that takes element values and puts it in profile object
        //if data then navigate to dashboard with all info in profile

    return (
        <div className="profile-form-display">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="last name" />
                    </Form.Group>
                </Row>
            
                <Row className="mb-3">
                    <Form.Group as={Col} xs={7} controlId="formGridBootcampName">
                        <Form.Label>Bootcamp Name</Form.Label>
                        <Form.Control placeholder="e.g. Code Platoon, Hack Reactor, etc." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridGraduationStatus">
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Enrolled"
                                type={type}
                                id={`default-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Graduated"
                                type={type}
                                id={`default-${type}-2`}
                            />
                            </div>
                        ))}
                    </Form.Group>
                    {/* make this a dropdown with years */}
                    <Form.Group as={Col} controlId="formGridYearGraduated">
                        <Form.Label>Year Graduated</Form.Label>
                        <Form.Control placeholder="enter year" />
                    </Form.Group>
                </Row>
                <Form.Select controlId="formGridRoleSelect">
                    {/* value 1 means isProfessional=True, value 2 means False */}
                    <option>Select Role Type</option>
                    <option value="1">Mentor/Professional</option> 
                    <option value="2">Mentee/Recent Grad</option>
                </Form.Select>
   

                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label htmlFor="basic-url">LinkedIn URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            https://linkedin.com/in/
                            </InputGroup.Text>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label htmlFor="basic-url">Github URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            https://github.com/
                            </InputGroup.Text>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Form.Label>Experience</Form.Label>
                <Row>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <DropdownMultiselect
                            options={["Finance", "Education", "Entertainment", "Medical", "Pharma", "Marketing", "Retail", "Government", "Environmental/Sustainability"]}
                            name="industries"
                            placeholder="Select Industries"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <DropdownMultiselect
                            options={["Big", "Medium", "Small", "Startup"]}
                            name="size of companies"
                            placeholder="Select sizes of companies you've worked for"
                        />
                    </Form.Group>
                </Row>
                <Form.Label>Skills</Form.Label>
                <Row>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Languages</Form.Label>
                        {/* populate options with backend data instead of hardcoding */}
                        <DropdownMultiselect
                            options={["C++", "C#", "Java", "JavaScript", "Python", "Ruby"]}
                            name="languages"
                            placeholder="Select Languages"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Web Development</Form.Label>
                        {/* populate options with backend data instead of hardcoding */}
                        <DropdownMultiselect
                            options={["Angular", "Django", "Express", "HTML/CSS", "jQuery", "Node.js", "React", "Redux"]}
                            name="web dev"
                            placeholder="Select Frameworks"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Mobile App Development</Form.Label>
                        {/* populate options with backend data instead of hardcoding */}
                        <DropdownMultiselect
                            options={["Android", "iOS", "Kotlin", "Swift", "Xcode", "React Native"]}
                            name="mobile app"
                            placeholder="Select Frameworks"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Database/Operations</Form.Label>
                        <DropdownMultiselect
                            options={["AWS", "Heroku", "Linux", "MongoDB", "MySQL", "Postgres", "SQL"]}
                            name="database/operations"
                            placeholder="Select database/ops"
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" id="formGridAbout">
                    <Form.Label>About Me</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Write about your background, interests, hobbies..." />
                </Form.Group>
                <Row>
                    {/* probably need phone number validation */}
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="enter phone number" />
                    </Form.Group>      
                    <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br/>
                <Link to={'/dashboard'}><Button variant="secondary" size="sm">Skip for now</Button></Link>
            </Form>
        </div>
    )
}

export default ProfileFormComp
