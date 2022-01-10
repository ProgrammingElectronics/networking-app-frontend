import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
//components
import ConnectionsContainerComp from '../components/ConnectionsContainer/ConnectionsContainerComp'
import NavbarComp from '../components/Navbar/NavbarComp'
import ProfileContainerComp from '../components/ProfileContainer/ProfileContainerComp'
import ProfileFormComp from '../components/ProfileForm/ProfileFormComp'
//connectionsContainer
    //connections mini card within that
    //show connections/show pending component
//profile container

//styles
import "../static/DashboardPageStyles.css"

//bootstrap
import Container from "react-bootstrap/Container";

// context
import UserContext from "../contexts/UserContext";


const DashboardPage = () => {
    //useEffect to setProfile
    //getProfile

    //pass array of connections as props to ConnectionsContainerComp

    // context
    const userContext = useContext(UserContext);
    const { user } = userContext;

    // if user not logged in, cannot access this page
    if (!user) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <Container>
                <NavbarComp />
            </Container>
            <div className="dashboardPageContainer">
                <div>
                    <ProfileContainerComp/>  
                </div>
                <div>
                    <ConnectionsContainerComp/>
                </div>
            </div>
            <div>
                <ProfileFormComp/>
            </div>
        </div>
    
    )
}

export default DashboardPage
