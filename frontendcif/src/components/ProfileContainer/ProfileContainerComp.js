import React from 'react'
//components
import ProfileComp from '../Profile/ProfileComp'
//styles
import "./ProfileContainerStyles.css"

const ProfileContainerComp = (props) => {
    //props
    const { profile } = props

    return (
        <div className="profileContainer">
            <ProfileComp profile={profile}/>
        </div>
    )
}

export default ProfileContainerComp
