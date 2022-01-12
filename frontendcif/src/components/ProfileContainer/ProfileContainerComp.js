import React from 'react'
//components
import ProfileComp from '../Profile/ProfileComp'
//styles
import { Container } from 'react-bootstrap'
import "./ProfileContainerStyles.css"

const ProfileContainerComp = (props) => {
    //props
    const { profile } = props

    return (
        <Container className="profileContainer">
            <ProfileComp profile={profile}/>
        </Container>
    )
}

export default ProfileContainerComp
