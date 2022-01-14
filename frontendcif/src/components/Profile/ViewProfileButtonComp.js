import React from 'react'
import { Button } from 'react-bootstrap'


const ViewProfileButtonComp = (props) => {
    //include logic for displaying edit profile modal onClick
    const { handleShowProfile } = props

    return (
        <div>
            <Button onClick={handleShowProfile} className="editButton" size="sm">View Profile</Button>
        </div>
    )
}

export default ViewProfileButtonComp
