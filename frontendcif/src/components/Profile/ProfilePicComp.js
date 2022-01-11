import React from 'react'

//styles
import "./ProfilePicStyles.css"

const ProfilePicComp = (props) => {
    const { profile } = props

    return (
    
        <div className="profileImgContainer">
            <img width="100%" src={profile['img_url']}/>
        </div>
     
    )
}

export default ProfilePicComp
