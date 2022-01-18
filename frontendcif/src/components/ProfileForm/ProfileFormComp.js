import { React, useState, useEffect } from 'react'
import { Form, Row, Button, Col, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
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
    const [selectedBootcamps, setSelectedBootcamps] = useState(null)
    //enrollments
    const [enrollments, setEnrollments] = useState([])
    const [profileEnrollment, setProfileEnrollment] = useState(null)
    //skills
    const [skills, setSkills] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])
    const [tempSelectedSkills, setTempSelectedSkills] = useState([])
    //industries
    const [industries, setIndustries] = useState([])
    const [selectedIndustries, setSelectedIndustries] = useState([])
    // const [industryProfilesArr, setIndustryProfilesArr] = useState([])
    // const [industryId, setIndustryId] = useState(null)
    //graduationStatus
    const [selectedGradStatus, setSelectedGradStatus] = useState('')

    //set user
    const { user } = props
    // console.log('user', user)

    const navigate = useNavigate()

    //helper variables
    let token = localStorage.getItem("auth-user")

    console.log('selected skills', selectedSkills)

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


        let userObj = {
            first_name: event.target.elements[0].value,
            last_name: event.target.elements[1].value,
            email: event.target.elements[64].value,  
        }

        const userData = await UserAPI.updateUser(token, userObj, user.id)
        if (userData) {
            console.log('user api data', userData)
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

        const profileData = await ProfileAPI.updateProfile(token, profileObj, profileID)
        if (profileData) {
            console.log('profile api data', profileData)   
        }

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
        // const currentSelectedSkills = [...selectedSkills]
        // const flatSelectedSkills = [].concat.apply([], currentSelectedSkills) 
        // console.log('flattened skills', flatSelectedSkills)

        const flatten = function(arr, result = []) {
            for (let i = 0, length = arr.length; i < length; i++) {
              const value = arr[i];
              if (Array.isArray(value)) {
                flatten(value, result);
              } else {
                result.push(value);
              }
            }
            return result;
        };

        console.log('flatten function', flatten(selectedSkills))

        // Add current user profile ID to each skill 
        for (let i = 0; i < selectedSkills.length; i++) {
                    
            //Get existing profiles in the industry
            const currentSkills = [...skills]
            const existingSkillsProfiles = currentSkills.filter((skill) => skill.id == selectedSkills[i])[0]['profiles']
            // Add current profile to the profile list for that industry
            existingSkillsProfiles.push(profileID)
            
            // console.log('ProfileFormComp | SubmitForm | newProfiles', newProfiles)
            console.log('ProfileFormComp | SubmitForm | existingProfilesSkills', existingSkillsProfiles)
            
            // add the updated list of profiles to the skill object
            let skillObj = {
                profiles: existingSkillsProfiles
            }

            // make API call to update each industry
            const skillData = await SkillAPI.updateSkill(token, skillObj, selectedSkills[i])
            if (skillData) {
                console.log('skill api data', skillData)
            }


        // const skillData = await SkillAPI.updateSkill(token, skillObj)
        // if (skillData) {
        //     console.log('skill api data', skillData)
            
        // }
        }

        //console log for all objects
        console.log('profileObj', profileObj)
        console.log('userObj', userObj)
        console.log('enrollmentObj', enrollmentObj)
        // console.log('industryObj', industryObj)
       


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


    const skillOptions = [
        {key: 'label', label: 'Languages', disabled: true}, 
        {key: 1, label: 'Python'}, 
        {key: 2, label: 'Javascript'}, 
        {key: 3, label: 'C++'}, 
        {key: 4, label: 'C'},
        {key: 5, label: 'Java'},
        {key: 6, label: 'Ruby'},
        {key: 7, label: 'PHP'},
        {key: 8, label: 'Angular'},
        {key: 9, label: 'Django'}, 
        {key: 10, label: 'Express'}, 
        {key: 11, label: 'HTML/CSS'}, 
        {key: 12, label: 'jQuery'},
        {key: 13, label: 'Node.js'},
        {key: 14, label: 'React'},
        {key: 15, label: 'Redux'},
        {key: 16, label: 'Android'},
        {key: 17, label: 'iOS'}, 
        {key: 18, label: 'Kotlin'}, 
        {key: 19, label: 'Swift'}, 
        {key: 20, label: 'Xcode'},
        {key: 21, label: 'React Native'},
        {key: 22, label: 'AWS'},
        {key: 23, label: 'Heroku'}, 
        {key: 24, label: 'Linux'}, 
        {key: 25, label: 'MongoDB'}, 
        {key: 26, label: 'MySQL'},
        {key: 27, label: 'Postgres'},
        {key: 28, label: 'SQL'}
    ]
    // const languageOptions = [
    //     {key: 1, label: 'Python'}, 
    //     {key: 2, label: 'Javascript'}, 
    //     {key: 3, label: 'C++'}, 
    //     {key: 4, label: 'C'},
    //     {key: 5, label: 'Java'},
    //     {key: 6, label: 'Ruby'},
    //     {key: 7, label: 'PHP'}
    // ]

    // const webDevOptions = [
    //     {key: 8, label: 'Angular'},
    //     {key: 9, label: 'Django'}, 
    //     {key: 10, label: 'Express'}, 
    //     {key: 11, label: 'HTML/CSS'}, 
    //     {key: 12, label: 'jQuery'},
    //     {key: 13, label: 'Node.js'},
    //     {key: 14, label: 'React'},
    //     {key: 15, label: 'Redux'}
    // ]

    // const mobileAppOptions = [
    //     {key: 16, label: 'Android'},
    //     {key: 17, label: 'iOS'}, 
    //     {key: 18, label: 'Kotlin'}, 
    //     {key: 19, label: 'Swift'}, 
    //     {key: 20, label: 'Xcode'},
    //     {key: 21, label: 'React Native'}
    // ]

    // const databaseOptions = [
    //     {key: 22, label: 'AWS'},
    //     {key: 23, label: 'Heroku'}, 
    //     {key: 24, label: 'Linux'}, 
    //     {key: 25, label: 'MongoDB'}, 
    //     {key: 26, label: 'MySQL'},
    //     {key: 27, label: 'Postgres'},
    //     {key: 28, label: 'SQL'}
    // ]



    const handleGradStatusChange = (e) => {
        console.log('grad value', e.target.value);
        setSelectedGradStatus(e.target.value);
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
                <Form.Group as={Col} controlId="formGridPicture">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control placeholder="Enter the url of an image to use as a profile picture" />
                </Form.Group>
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
                        {/* tried the single select dropdown and caused an infinite loop...not sure why */}
                          {/* <DropdownButton
                            alignRight
                            title="Select Bootcamp"
                            id="dropdown-menu-align-right">
                            {bootcampOptions.map((option) => {
                                return (
                                    <Dropdown.Item eventKey={option.key} onClick={setSelectedBootcamps(option.key)}>{option.label}</Dropdown.Item>
                                )
                            }
                            )}
                            </DropdownButton> */}
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
                                console.log('industry select',selected)
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
                        <Form.Label>All Skills</Form.Label>
                        <DropdownMultiselect
                            options={skillOptions}
                            name="allSkills"
                            placeholder="Select Skills"
                            handleOnChange={(selected) => {
                                setSelectedSkills(selected)
                            }}
                        />
                    </Form.Group>
                    {/* <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Web Development</Form.Label>
                        <DropdownMultiselect
                            options={webDevOptions}
                            name="skills"
                            placeholder="Select Frameworks"
                            handleOnChange={(selected) => {
                                setSelectedSkills(selectedSkills => [...selectedSkills, ...selected])
                            }}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Mobile App Development</Form.Label>
                        <DropdownMultiselect
                            options={mobileAppOptions}
                            name="skills"
                            placeholder="Select Frameworks"
                            handleOnChange={(selected) => {
                                setSelectedSkills(selectedSkills => [...selectedSkills, ...selected])
                            }}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                        <Form.Label>Database/Operations</Form.Label>
                        <DropdownMultiselect
                            options={databaseOptions}
                            name="skills"
                            placeholder="Select database/ops"
                            handleOnChange={(selected) => {
                                setSelectedSkills(selectedSkills => [...selectedSkills, selected])
                            }}
                        />
                    </Form.Group> */}
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
