import React from 'react'
import { Button } from 'react-bootstrap'


const EditProfileButtonComp = (props) => {
    //include logic for displaying edit profile modal onClick
    const { handleShowProfile } = props

    return (
        <div>
            <Button onClick={handleShowProfile} className="editButton" size="sm">Edit Profile</Button>
        </div>
    )
}

export default EditProfileButtonComp
