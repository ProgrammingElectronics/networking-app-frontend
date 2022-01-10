import React, { useEffect } from 'react'
//components
import ConnectionsContainerComp from '../components/ConnectionsContainer/ConnectionsContainerComp'
import ProfileContainerComp from '../components/ProfileContainer/ProfileContainerComp'
import { useState,useContext } from 'react'
import UserContext from '../contexts/UserContext'
import ConnectionRequestAPI from '../api/ConnectionRequestAPI'
//connectionsContainer
    //connections mini card within that
    //show connections/show pending component
//profile container

//styles
import "../static/DashboardPageStyles.css"


const DashboardPage = () => {
    // should we grab all of the profile information and set it as a useContext?
    const [ profile, setProfile ] = useState(null)
    const [ connections, setConnections ] = useState([])

    // setting the user by context
    const userContext = useContext(UserContext);
    const { user } = userContext;
    console.log(user)
    //useEffect to setProfile
    useEffect(() => {
        const getConnections = async () => {
            let response = await ConnectionRequestAPI.getConnections(localStorage.getItem("auth-user"));
            console.log(localStorage.getItem("auth-user"))
            let data = await response.json();
            setConnections(data)
        }
        getConnections()
      }, [])
    //getProfile
    //pass array of connections as props to ConnectionsContainerComp

    return (
        <div>
            <h1>Navbar Comp</h1>
            <div className="dashboardPageContainer">
                <div>
                    <ProfileContainerComp/>  
                </div>
                <div>
                    <ConnectionsContainerComp />
                </div>
            </div>
        </div>
    
    )
}

export default DashboardPage
