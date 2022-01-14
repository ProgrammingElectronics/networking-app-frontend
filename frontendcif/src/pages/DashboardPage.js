import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

//components
import ConnectionsContainerComp from '../components/ConnectionsContainer/ConnectionsContainerComp'
import NavbarComp from '../components/Navbar/NavbarComp'
import ProfileContainerComp from '../components/ProfileContainer/ProfileContainerComp'
import MessagingPage from './MessagingPage';
import ConnectionRequestAPI from '../api/ConnectionRequestAPI'
import ProfileAPI from '../api/ProfileAPI'

//styles
import "../static/DashboardPageStyles.css"

//bootstrap
import { Container, Col, Row } from "react-bootstrap";

// context
import UserContext from "../contexts/UserContext";
import NewsContainerComp from '../components/HackerNews/NewsContainerComp';



const DashboardPage = () => {
    // should we grab all of the profile information and set it as a useContext?
    // states
    const [ profile, setProfile ] = useState(null)
    const [ connections, setConnections ] = useState(null)
    const [ userToMessage, setUserToMessage ] = useState(null);


    // setting the user by context
    const userContext = useContext(UserContext);
    const { user } = userContext;
    // console.log("Dashboard | user", user)
    //const profile_id = localStorage.getItem('user')

    //these lines are giving me user=null
    // const profile_id = user.profile
    // console.log("Dashboard | profile_id", profile_id)

    

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
    console.log(userToMessage)
    return (
        <div>
            <Container fluid>
                <NavbarComp />
            </Container>
            <Container fluid className='all-content'>
                <Row className="dashboardPageContainer">
                    <Col className='left-col' >
                        {
                        profile
                        ?
                        <>
                        <ProfileContainerComp profile={profile}/>
                        <NewsContainerComp/>
                        </>
                        :
                        <>
                        </>
                        }
                    </Col>
                    <Col className='right-col' xs={6}>   
                        {
                        connections
                        ? 
                        <Row>         
                            <ConnectionsContainerComp setUserToMessage={setUserToMessage} connections={connections}/>        
                        </Row>
                        :
                        <>      
                        </>
                        }
                        <MessagingPage userToMessage={userToMessage}/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default DashboardPage
