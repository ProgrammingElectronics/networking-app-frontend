import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

//components
import ConnectionsContainerComp from '../components/ConnectionsContainer/ConnectionsContainerComp'
import NavbarComp from '../components/Navbar/NavbarComp'
import ProfileContainerComp from '../components/ProfileContainer/ProfileContainerComp'

import ConnectionRequestAPI from '../api/ConnectionRequestAPI'
import ProfileAPI from '../api/ProfileAPI'
import getStories from '../api/HackerNewsAPI'

//styles
import "../static/DashboardPageStyles.css"

//bootstrap
import { Container, Col } from "react-bootstrap";

// context
import UserContext from "../contexts/UserContext";
import HackerNewsComp from '../components/HackerNews/NewsContainerComp';
import getStoriesAPI from '../api/HackerNewsAPI';


const DashboardPage = () => {
    // should we grab all of the profile information and set it as a useContext?
    // states
    const [ profile, setProfile ] = useState(null)
    const [ connections, setConnections ] = useState(null)
    const [ news, setNews ] = useState([])

    // setting the user by context
    const userContext = useContext(UserContext);
    const { user } = userContext;
    // console.log("Dashboard | user", user)
    //const profile_id = localStorage.getItem('user')

    //these lines are giving me user=null
    // const profile_id = user.profile
    // console.log("Dashboard | profile_id", profile_id)

    useEffect (() => {
        getStoriesAPI().then(data => data && setNews(data))
    }, [])

    //useEffect to setProfile and setConnections
    useEffect(() => {
        let token = localStorage.getItem("auth-user")
        const getConnections = async () => {
            let data = await ConnectionRequestAPI.fetchConnections(token);
            // console.log('connections data', data)
            setConnections(data)
        }
        const getProfile = async () => {
            let data = await  ProfileAPI.getProfileByID(token, user.profile);
            // console.log('profile data', data)
            setProfile(data)
            
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
            <Container fluid>
                <NavbarComp />
            </Container>
            <Container fluid className="dashboardPageContainer">
             
                <Col xs={5}>
                    {
                    profile
                    ?
                    <ProfileContainerComp profile={profile}/>
                    :
                    <>
                    </>
                    }
                </Col>
                <Col className='right-col' xs={6}>
                    <HackerNewsComp news={news}/>
                    {
                    connections
                    ?
                    
                    <ConnectionsContainerComp connections={connections}/>
                    :
                    <>      
                    </>
                    }
                    
                </Col>
            </Container>
        </div>
    
    )
}

export default DashboardPage
