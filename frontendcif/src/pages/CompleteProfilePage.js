import React, { useContext, useState, useEffect } from 'react'
import ProfileFormComp from '../components/ProfileForm/ProfileFormComp'
import UserContext from '../contexts/UserContext';
import { Container } from 'react-bootstrap';
import NavbarComp from '../components/Navbar/NavbarComp'

const CompleteProfilePage = () => {
    const userContext = useContext(UserContext);
    const { user } = userContext;

    return (
        <div>
            <Container fluid>
                <NavbarComp />
            </Container>
            <ProfileFormComp user={user}/>
        </div>
    )
}

export default CompleteProfilePage
