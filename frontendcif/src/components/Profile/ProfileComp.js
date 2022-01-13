import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Container, Col, Row} from 'react-bootstrap';
//components
import ProfilePicComp from './ProfilePicComp'
import EditProfileButtonComp from './EditProfileButtonComp'
//styles 
import "./ProfileStyles.css"
import ProfileDetailsModalComp from '../ModalComps/ProfileDetailsModalComp';
const ProfileComp = (props) => {

    //props
    const { profile } = props
    // console.log('profilecomp | profile', profile)

    const renderProfile = () => {

        if (!profile)
            return null


        return (
            <Container className="profileInfoContainer">
                <ProfileDetailsModalComp/>
                <Row>
                    <div className="introInfo">
                        <h3>{profile['user']['first_name']} {profile['user']['last_name']}</h3>
                        {/* Role | Bootcamp */}
                        <h5>{profile['enrollment'][0]['bootcamp']['name']} | {profile['enrollment'][0]['graduation_year']}</h5>
                        <p>Github: link | LinkedIn: link</p>
                    </div>
                </Row>
                <Row>
                    <Col className="aboutMe">
                        <h6>About Me:</h6>
                        <p>{profile['about_me']}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="experiences">
                        <h5>Experience</h5>    
                        <div className="industries">
                            <h6>Industries</h6>
                            <ul>
                            {
                                profile['industries'].map((industry, index) =>
                                    <li key={index}>{industry.name}</li>
                            )}
                            </ul>
                            {/* figure out size of companies */}
                        </div>
                        <div className="skills">
                        <h5>Skills</h5>
                        {/* <h6>Languages:</h6> */}
                        <ul>
                        {profile['skills'].filter(skills => skills.type === 'language').map((language, index) =>
                                <li key={index}>{language.name}</li>
                        )}
                        </ul>
                            {/* refactor later to pull in skills['types'] instead of hardcoding */}
                            {/* <h6>Web Development:</h6> */}
                            <ul>
                                {profile['skills'].filter(skills => skills.type === 'Web Development').map((framework, index) =>
                                        <li key={index}>{framework.name}</li>
                                )}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <div>
            {/* <ProfilePicComp profile={profile}/>
            <EditProfileButtonComp/> */}
            {renderProfile()}
        </div>
    )
}

export default ProfileComp
