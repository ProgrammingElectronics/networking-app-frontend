import { React, useState, useEffect } from 'react'
import { Form, Row, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import { YearPicker } from 'react-dropdown-date';
import { Link, useNavigate } from 'react-router-dom';
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap';

import ProfileAPI from '../../api/ProfileAPI';
import UserAPI from '../../api/UserAPI';
import BootcampAPI from '../../api/BootcampAPI';
import EnrollmentAPI from '../../api/EnrollmentAPI';
import SkillAPI from '../../api/SkillAPI';
import IndustryAPI from '../../api/IndustryAPI';

//style
import "./ProfileFormStyels.css"

const ProfileFormComp = (props) => {

    //states
    //isProfessional
    const [pro, setPro] = useState(false)
    //bootcamps
    const [bootcamps, setBootcamps] = useState([])
    const [selectedBootcamps, setSelectedBootcamps] = useState([])
    //enrollments
    const [enrollments, setEnrollments] = useState([])
    const [profileEnrollment, setProfileEnrollment] = useState(null)
    //skills
    const [skills, setSkills] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])
    //industries
    const [industries, setIndustries] = useState([])
    const [selectedIndustries, setSelectedIndustries] = useState([])
    const [industryProfilesArr, setIndustryProfilesArr] = useState([])
    const [industryId, setIndustryId] = useState(null)
    //graduationStatus
    const [selectedGradStatus, setSelectedGradStatus] = useState('')

    //set user
    const { user } = props
    console.log('user', user)

    const navigate = useNavigate()

    //helper variables
    let token = localStorage.getItem("auth-user")

    
    
    useEffect(() => {  
        const getEnrollments = async () => {
            let data = await EnrollmentAPI.getAllEnrollments(token);
            setEnrollments(data)
            console.log('enrollment data', data)
        }  
        const getSkills = async () => {
            let data = await SkillAPI.getAllSkills(token);
            setSkills(data)
            console.log('skills data', data)
        }   
        const getIndustries = async () => {
            let data = await IndustryAPI.getAllIndustries(token);
            setIndustries(data)
            console.log('industry data', data)
           
        }  
        
        getEnrollments()
        getSkills()
        getIndustries()
    }, [])

    useEffect(() => {
        console.log('selected industries', selectedIndustries) 
    }, [selectedIndustries])

    

    const handleFormSubmit = async (event) => {
        
        event.preventDefault()
        console.log('form elements', event.target.elements)

        const profileID = user['profile']
        console.log('profile id', profileID)

        // let gradStatus = ''
        // if (event.target.elements[9].checked === 'true') {
        //     gradStatus = event.target.elements[9].value
        // } else {
        //     gradStatus = event.target.elements[10].value
        // }

        //setting graduation status
        if (event.target.elements[9].checked === 'true') {
            setSelectedGradStatus(event.target.elements[9].value)
        } else {
            setSelectedGradStatus(event.target.elements[10].value)
        }

        //for each industry selected, add profileID to profiles array at that industry ID
        // industries && industries.forEach((index) => {
        //     console.log('industry profiles',industries[index])
        // }) 





        // Add current user profile ID to the industry 
        for (let i = 0; i < selectedIndustries.length; i++) {
                        
            //Get existing profiles in the industry
            const currentIndustries = [...industries]
            const existingProfiles = currentIndustries.filter((industry) => industry.id == selectedIndustries[i])[0]['profiles']
            // Add current profile to the profile list for that industry
            existingProfiles.push(profileID)
            
            // console.log('ProfileFormComp | SubmitForm | newProfiles', newProfiles)
            console.log('ProfileFormComp | SubmitForm | existingProfiles', existingProfiles)
            
            // add the updated list of profiles to the industry object
            let industryObj = {
                profiles: existingProfiles
            }

            // make API call to update each industry
            const industryData = await IndustryAPI.updateIndustry(token, industryObj, selectedIndustries[i])
            if (industryData) {
                console.log('industry api data', industryData)
            }
        }
                 
        //setting enrollment id for update enrollment (doesn')
        for (let i = 0; i < enrollments.length; i++) {
            if(enrollments[i]['profile']===profileID){
                setProfileEnrollment(enrollments[i]['id'])
                console.log('enrollment id', enrollments[i]['id'])
            }
        }

        const profileObj = {
            education: event.target.elements[2].value,
            is_professional: pro,
            phone_number: event.target.elements[63].value,
            linkedin_url: event.target.elements[13].value,
            github_url: event.target.elements[14].value,
            img_url: 'https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png',
            about_me: event.target.elements[62].value
        }

        let userObj = {
            first_name: event.target.elements[0].value,
            last_name: event.target.elements[1].value,
            email: event.target.elements[64].value,
            
        }

        // Form the enrollment Object
        let enrollmentObj = {
            profile: profileID,
            bootcamp: selectedBootcamps[0],
            graduation_year: event.target.elements[11].value,
            graduation_status: selectedGradStatus
        }

        // Create a new enrollment
        const enrollmentData = await EnrollmentAPI.addEnrollment(token, enrollmentObj)
        
        if (enrollmentData) {
                console.log('enrollment api data', enrollmentData)
        }

        let industryObj = {
            profile: []
        }
       

        // let skillObj = {
        //     profile: [],
        // }

        console.log('profileObj', profileObj)
        console.log('userObj', userObj)
        console.log('enrollmentObj', enrollmentObj)
        // console.log('industryObj', industryObj)
       
        const profileData = await ProfileAPI.updateProfile(token, profileObj, profileID)
        if (profileData) {
            console.log('profile api data', profileData)
            
        }

        const userData = await UserAPI.updateUser(token, userObj, user.id)
        if (userData) {
            console.log('user api data', userData)
            
        }



        

        // const skillData = await SkillAPI.updateSkill(token, skillObj)
        // if (skillData) {
        //     console.log('skill api data', skillData)
            
        // }
    }

    //had to hard code dropdown options; the key needs to match id of bootcamp which might be problematic 
    const bootcampOptions = [
        {key: 1, label: 'Code Platoon'}, 
        {key: 2, label:'Parris Island'}, 
        {key: 3, label:'Galvanize'}, 
        {key: 4, label:'Hack Reactor'}
    ];

    const industryOptions = [
        {key: 1, label: 'Pharma'}, 
        {key: 2, label: 'Medical'}, 
        {key: 3, label: 'Entertainment'}, 
        {key: 4, label: 'Education'},
        {key: 5, label: 'Marketing'},
        {key: 6, label: 'Retail'},
        {key: 7, label: 'Government'},
        {key: 8, label: 'Environmental/Sustainability'},
    ];

    const handleGradStatusChange = (e) => {
        console.log('grad value', e.target.value);
        setSelectedGradStatus(e.target.value);
    }

    console.log('bootcamp', selectedBootcamps)
    

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
                <Form.Group as={Col} controlId="formGridEducation">
                        <Form.Label>Education</Form.Label>
                        <Form.Control placeholder="Enter any schools of higher education" />
                </Form.Group>                  
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Bootcamp</Form.Label>
                        <Form.Group as={Col} controlId="my_multiselect_field">
                        <DropdownMultiselect
                            options={bootcampOptions}
                            name="bootcamps"
                            placeholder="Select Bootcamp"
                            handleOnChange={(selected) => {
                                setSelectedBootcamps(selected)
                            }}
                        />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridGraduationStatus">
                    <Form.Label>Graduation Status</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                name="grad"
                                label="Enrolled"
                                value='enrolled'
                                type={type}
                                id={`default-${type}-1`}
                                onChange={handleGradStatusChange}
                            />
                            <Form.Check
                                inline
                                name="grad"
                                value='graduated'
                                label="Graduated"
                                type={type}
                                id={`default-${type}-2`}
                                onChange={handleGradStatusChange}
                            />
                            </div>
                        ))}
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridYearGraduated">
                        <Form.Label>Year Graduated</Form.Label>
                        {/* <YearPicker defaultValue={'select year'} start={2000} reverse/> */}
                        <Form.Control placeholder="enter year" />
                    </Form.Group>
                </Row>
                <Form.Select controlId="formGridRoleSelect" onChange={(selected) => {
                                setPro(selected.target.value)
                            }}>
                    <option>Select Role Type</option>
                    <option value={true}>Mentor/Professional</option> 
                    <option value={false}>Mentee/Newcomer</option>
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
                            options={industryOptions}
                            name="industries"
                            placeholder="Select Industries"
                            handleOnChange={(selected) => {
                                setSelectedIndustries(selected)
                            }}
                        />
                    </Form.Group>
                    {/* <Form.Group as={Col} controlId="my_multiselect_field">
                        <DropdownMultiselect
                            options={["Big", "Medium", "Small", "Startup"]}
                            name="size of companies"
                            placeholder="Select sizes of companies you've worked for"
                        />        
                    </Form.Group> */}
                </Row>
                <Form.Label>Skills</Form.Label>
                <Row>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Languages</Form.Label>
                        <DropdownMultiselect
                            options={["Python", "Javascript", "C++", "C", "Java", "Ruby", "PHP"]}
                            name="languages"
                            placeholder="Select Languages"
                        />
                    </Form.Group>
                    {/* add in these skill types later */}
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Web Development</Form.Label>
                        <DropdownMultiselect
                            options={["Angular", "Django", "Express", "HTML/CSS", "jQuery", "Node.js", "React", "Redux"]}
                            name="web dev"
                            placeholder="Select Frameworks"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Mobile App Development</Form.Label>
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
