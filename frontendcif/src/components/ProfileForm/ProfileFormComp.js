import { React, useState, useEffect } from 'react'
import { Form, Row, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import { YearPicker } from 'react-dropdown-date';
import { Link, useNavigate } from 'react-router-dom'
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap'

import ProfileAPI from '../../api/ProfileAPI'
import BootcampAPI from '../../api/BootcampAPI'

//style
import "./ProfileFormStyels.css"

const ProfileFormComp = (props) => {

    //states
    const [pro, setPro] = useState('false')
    const [bootcamps, setBootcamps] = useState([])

    //set user
    const { user } = props

    const navigate = useNavigate()

    //useEffect
    useEffect(() => {
        let token = localStorage.getItem("auth-user")

        const getBootcamps = async () => {
            let data = await  BootcampAPI.getAllBootcamps(token);
            console.log(data)
            setBootcamps(data)   
        }
        getBootcamps()
    }, [])
    
    const bootcampArray = bootcamps.push

    //handlers
    const handleChangePro = (event) => {
        const newValue = event.target.value
        // console.log('select value',event.target.value)
        setPro(newValue)   
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        console.log('form elements', event.target.elements)

        const profileObj = {
            user: {
                username: user.username, 
                first_name: event.target.elements[0].value,
                last_name: event.target.elements[1].value,
                email: event.target.elements[64].value,
            },
            education: event.target.elements[2].value,
            is_professional: pro,
            phone_number: event.target.elements[63].value,
            linkedin_url: 'https://linkedin.com/in/' + event.target.elements[8].value,
            github_url: 'https://github.com/' + event.target.elements[9].value,
            img_url: '',
            about_me: event.target.elements[62].value,
            enrollment: {

            }
        }   

        console.log('profileObj', profileObj)
        
        const data = await ProfileAPI.addProfile(profileObj)
        if (data) {
            console.log('data', data)
            navigate( `/trips/${data.id}/`)
        }
    }

    return (
        <div className="profile-form-display">
            <Form onSubmit={handleFormSubmit}>
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
                {/* <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group> */}
                <Form.Group as={Col} controlId="formGridEducation">
                        <Form.Label>Education</Form.Label>
                        <Form.Control placeholder="Enter any schools of higher education" />
                </Form.Group>
                
                {/* <Form.Group as={Col} controlId="formGridIsProfessional">
                    {/* <Form.Label>Which role will you take on as a user of this site?</Form.Label>
                       
                        <div  className="radioPro">
                            <Form.Check 
                                name='pro'
                                inline
                                label="Professional (mostly giving help)"
                                value="true"
                                type='radio'
                                onChange={handleChangePro}
                                id='1'
                            />
                            <Form.Check
                                name='pro'
                                inline
                                label="Newcomer - mostly seeking help"
                                value='false'
                                type='radio'
                                onChange={handleChangePro}
                                id='2'
                            />
                        </div> */}
                    
                {/* </Form.Group> */} 
                <Row className="mb-3">
                    {/* <Form.Group as={Col} xs={7} controlId="formGridBootcampName">
                        <Form.Label>Bootcamp Name</Form.Label>
                        <Form.Control placeholder="e.g. Code Platoon, Hack Reactor, etc." />
                    </Form.Group> */}
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Bootcamp</Form.Label>
                        <DropdownMultiselect
                            options={}
                            name="bootcamps"
                            placeholder="Select bootcamp"
                        />
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
                        <YearPicker defaultValue={'select year'} start={2000} reverse/>
                        {/* <Form.Control placeholder="enter year" /> */}
                    </Form.Group>
                </Row>
                <Form.Select controlId="formGridRoleSelect" onChange={handleChangePro}>
                    {/* value 1 means isProfessional=True, value 2 means False */}
                    <option>Select Role Type</option>
                    <option value="true">Mentor/Professional</option> 
                    <option value="false">Mentee/Recent Grad</option>
                </Form.Select>
   

                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label htmlFor="linkedin-url">LinkedIn URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="linkedin">
                            https://linkedin.com/in/
                            </InputGroup.Text>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label htmlFor="github-url">Github URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="github">
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
