import React, { useEffect } from 'react'
//components
import ConnectionsContainerComp from '../components/ConnectionsContainer/ConnectionsContainerComp'
import ProfileContainerComp from '../components/ProfileContainer/ProfileContainerComp'
import { useState,useContext } from 'react'
import UserContext from '../contexts/UserContext'
import ConnectionRequestAPI from '../api/ConnectionRequestAPI'
import ProfileAPI from '../api/ProfileAPI'
//connectionsContainer
    //connections mini card within that
    //show connections/show pending component
//profile container

//styles
import "../static/DashboardPageStyles.css"


const DashboardPage = () => {
    // should we grab all of the profile information and set it as a useContext?
    // states
    const [ profile, setProfile ] = useState(null)
    const [ connections, setConnections ] = useState([])

    // setting the user by context
    const userContext = useContext(UserContext);
    const { user } = userContext;
    //useEffect to setProfile
    useEffect(() => {
        let token = localStorage.getItem("auth-user")
        const getConnections = async () => {
            let response = await ConnectionRequestAPI.getConnections(token);
            let data = await response.json();
            setConnections(data)
        }
        const getProfile = async () => {
            let profile_id = user.profile
            console.log(profile_id)
            if (profile_id) {
                let response = await  ProfileAPI.getProfileByID(token, profile_id);
                let data = await response.json();
                setProfile(data)
            }
        }
        // These two fetch calls are working, but I cannot access the data. If you check the developer panel -> application -> XHR and fetch they are grabbing the data, but it is not setting it here... I am not sure why.
        getConnections()
        getProfile()
      }, [])
    //getProfile
    //pass array of connections as props to ConnectionsContainerComp

    connections ? console.log("CONNECTIONS:", connections) : console.log("connections not rendered")
    profile ? console.log("PROFILE:", profile) : console.log("profile not rendered")

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
