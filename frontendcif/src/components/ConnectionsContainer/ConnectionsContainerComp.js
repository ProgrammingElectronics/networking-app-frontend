import { useState, React, useEffect } from 'react'

//components
import MiniCardComp from '../ConnectionMiniCard/MiniCardComp'

//styles
import "./ConnectionsContainerStyles.css"
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
import PendingMiniCardComp from '../ConnectionMiniCard/PendingMiniCardComp';

const ConnectionsContainerComp = (props) => {
    // states
    const [ basicActive, setBasicActive ] = useState('tab1');
    const [ pendingConnections, setPendingConnections ] = useState([])
    const [ activeConnections, setActiveConnections ] = useState([])
    const [ deniedConnections, setDeniedConnections ] = useState([])

    // localStorage
    const userProfileID = localStorage.getItem('user_profile')

    // props
    const { connections } = props

    // helpers
    // write filter here that filters connection based on type of connections(pending, active, denied)
    const checkPending = (connection) => {
        let isCurrentUserProfile = connection.from_profile.id == userProfileID
        return connection.status === 'pending' && !isCurrentUserProfile
    }
   
    const checkActive = (connection) => {
        let isCurrentUserProfile = connection.from_profile.id == userProfileID
        return connection.status === 'accepted' && !isCurrentUserProfile
    }

    const checkDenied = (connection) => {
        let isCurrentUserProfile = connection.from_profile.id == userProfileID
        return connection.status === 'rejected' && !isCurrentUserProfile
    }

    // effects
    useEffect(()=>{
      if (connections) {
          let newPendingList = connections.filter(checkPending)
          setPendingConnections(newPendingList)
          let newActiveList = connections.filter(checkActive)
          setActiveConnections(newActiveList)
          let newDeniedList = connections.filter(checkDenied)
          setDeniedConnections(newDeniedList)
      }  
    },[connections])

    // handlers
    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };

    // helper functions
    const renderMiniCardComps = (connectionsList) => {
        let newMiniCardList = connectionsList.map((connection)=>{
            return <MiniCardComp connection={connection}/>
        })
        return newMiniCardList
    }

    return (
        <div className="connectionsContainer">
           {/* This contains all the approved and pending connections */}
           <div className="tabs">
            <MDBTabs className='mb-3'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        Connections
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        Pending
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
                <div className="tab-content">
                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive === 'tab1'}>
                        {activeConnections ? renderMiniCardComps(activeConnections) : <></>}
                            </MDBTabsPane>
                            {/* pass props of array of connections here; also remove repeated MiniCardComp, put multiple in to simulate what scrolling looks like in container */}
                        <MDBTabsPane show={basicActive === 'tab2'}>
                            <PendingMiniCardComp/>
                            </MDBTabsPane>
                            {/* pass props of array of pending connections here */}
                            {pendingConnections ? renderMiniCardComps(pendingConnections) : <></>}
                    </MDBTabsContent>
                </div>
           </div>
            
        </div>
    )
}

export default ConnectionsContainerComp
