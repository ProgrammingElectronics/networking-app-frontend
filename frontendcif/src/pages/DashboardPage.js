import React from 'react'
//components
import ConnectionsContainerComp from '../components/ConnectionsContainer/ConnectionsContainerComp'
import ProfileContainerComp from '../components/ProfileContainer/ProfileContainerComp'
//connectionsContainer
    //connections mini card within that
    //show connections/show pending component
//profile container

//styles
import "../static/DashboardPageStyles.css"


const DashboardPage = () => {
    //useEffect to setProfile
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
                    <ConnectionsContainerComp/>
                </div>
            </div>
        </div>
    
    )
}

export default DashboardPage
