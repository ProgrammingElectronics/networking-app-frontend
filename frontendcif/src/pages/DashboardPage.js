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
    const [ connections, setConnections ] = useState(null)

    // setting the user by context
    const userContext = useContext(UserContext);
    const { user } = userContext;
    const profile_id = localStorage.getItem('user_profile')

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

    return (
        <div>
            <h1>Navbar Comp</h1>
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
