import React from 'react'
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


const DashboardPage = () => {
    //useEffect to setProfile
    //getProfile

    //pass array of connections as props to ConnectionsContainerComp

    return (
        <div>
            <NavbarComp/>
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
