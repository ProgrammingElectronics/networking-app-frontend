import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Container, Col, Row} from 'react-bootstrap';
//components
import ProfilePicComp from './ProfilePicComp'

//styles 
import "./ProfileStyles.css"
import ProfileDetailsModalComp from '../ModalComps/ProfileDetailsModalComp';
import ProfileFormComp from '../ProfileForm/ProfileFormComp';
const ProfileComp = (props) => {

    //props
    const { profile } = props
    console.log('profilecomp | profile', profile)

    const renderProfile = () => {

        if (!profile)
            return null


        return (
            <Container className="profileInfoContainer">
                <Row>
                    <h3>Welcome back, {profile['user']['first_name']}!</h3>
                    <ProfilePicComp profile={profile}/>
                </Row>
                <Row>
                    { profile['enrollment'][0] &&
                        <div className="introInfo">
                            <h5>{profile['enrollment'][0]['bootcamp']['name']} | {profile['enrollment'][0]['graduation_year']}</h5>
                        </div>
                    }
                </Row>
                <ProfileDetailsModalComp profile={profile}/>
            </Container>
        )
    }

    return (
        <div>
            
            {renderProfile()}
        </div>
    )
}

export default ProfileComp
