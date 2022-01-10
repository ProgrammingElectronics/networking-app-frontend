import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

//components
import ConnectionsContainerComp from '../components/ConnectionsContainer/ConnectionsContainerComp'
import NavbarComp from '../components/Navbar/NavbarComp'
import ProfileContainerComp from '../components/ProfileContainer/ProfileContainerComp'

import ConnectionRequestAPI from '../api/ConnectionRequestAPI'
import ProfileAPI from '../api/ProfileAPI'

//styles
import "../static/DashboardPageStyles.css"

//bootstrap
import Container from "react-bootstrap/Container";

// context
import UserContext from "../contexts/UserContext";


const DashboardPage = () => {
    // should we grab all of the profile information and set it as a useContext?
    // states
    const [ profile, setProfile ] = useState(null)
    const [ connections, setConnections ] = useState(null)

    // setting the user by context
    const userContext = useContext(UserContext);
    const { user } = userContext;
    console.log("Dashboard | user", user)
    //const profile_id = localStorage.getItem('user')
    const profile_id = user.profile
    console.log("Dashboard | profile_id", profile_id)

    

    //useEffect to setProfile and setConnections
    useEffect(() => {
        let token = localStorage.getItem("auth-user")
        const getConnections = async () => {
            let data = await ConnectionRequestAPI.fetchConnections(token);
            console.log(data)
            setConnections(data)
        }
        const getProfile = async () => {
            if (profile_id) {
                let data = await  ProfileAPI.getProfileByID(token, profile_id);
                setProfile(data)
            }
        }
        getConnections()
        getProfile()
      }, [])
    //getProfile
    //pass array of connections as props to ConnectionsContainerComp

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
                    {
                    profile
                    ?
                    <ProfileContainerComp profile={profile}/>
                    :
                    <></>
                    }
                </div>
                <div>
                    {
                    connections
                    ?
                    <ConnectionsContainerComp connections={connections}/>
                    :
                    <></>
                    }
                    
                </div>
            </div>
        </div>
    
    )
}

export default DashboardPage
