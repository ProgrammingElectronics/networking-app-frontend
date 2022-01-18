import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import ViewProfileButtonComp from '../Profile/ViewProfileButtonComp';

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
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                    <Row>
                    <h4>{profile['user']['first_name']} {profile['user']['last_name']}</h4>
                        {profile['enrollment'][0] && 
                            <>    
                            <h5>{profile['enrollment'][0]['bootcamp']['name']} | {profile['enrollment'][0]['graduation_year']}</h5>
                            </>
                        }
                        {/* want to change these to hyperlinks */}
                        <p>Github: https://github.com/{profile['github_url']} | LinkedIn: https://linkedin.com/in/{profile['linkedin_url']}</p>
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
                            </div>
                            <div className="skills">
                                <h5>Skills</h5>
                            
                                
                                <h6>Languages:</h6>
                                    <ul>
                                        {profile['skills'].filter(skills => skills.type === 'language').map((language, index) =>
                                                <li key={index}>{language.name}</li>
                                        )}
                                    </ul>
                                
                            
                            
                                <h6>Web Development:</h6>
                                    <ul>
                                        {profile['skills'].filter(skills => skills.type === 'web development').map((framework, index) =>
                                                <li key={index}>{framework.name}</li>
                                        )}
                                    </ul>
                            
                            
                                <h6>Mobile Apps:</h6>
                                    <ul>
                                        {profile['skills'].filter(skills => skills.type === 'mobile app').map((framework, index) =>
                                                <li key={index}>{framework.name}</li>
                                        )}
                                    </ul>
                            
                            
                                
                                <h6>Database/Ops:</h6>
                                    <ul>
                                        {profile['skills'].filter(skills => skills.type === 'database/ops').map((framework, index) =>
                                            <li key={index}>{framework.name}</li>
                                        )}
                                    </ul>
                            </div>
                        </Col>
                    </Row>
                    </Modal.Body>
                </Modal> 
            </div>
          
        )
    }

    return (
        <div>
            <ViewProfileButtonComp handleShowProfile={handleShowProfile}/>
            
            {renderModal()}
        </div>
    )
}

export default ProfileDetailsModalComp
