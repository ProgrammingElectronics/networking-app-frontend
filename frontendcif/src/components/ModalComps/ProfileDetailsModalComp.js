import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'

const ProfileDetailsModalComp = (props) => {
    //pass down profile prop
    const { profile } = props

    // to show modal
    const [showProfile, setShowProfile] = useState(false);

    // to handle showing/closing modal
    const handleShowProfile = () => setShowProfile(true);
    const handleCloseProfile = () => setShowProfile(false);

    //can also put an edit button in this modal

    const renderModal = () => {
        if (!profile)
            return null

        return (
            <div>
                <Modal show={showProfile} onHide={handleCloseProfile}>
                   
                </Modal> 
            </div>
          
        )
    }

    return (
        <div>
            <Button onClick={handleShowProfile}>
                View Profile
            </Button>
            {renderModal()}
        </div>
    )
}

export default ProfileDetailsModalComp
