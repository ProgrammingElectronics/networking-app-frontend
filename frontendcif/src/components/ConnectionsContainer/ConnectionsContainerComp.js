import { useState, React, useEffect } from 'react'

//components
import MiniCardComp from '../ConnectionMiniCard/MiniCardComp'
import RequestMiniCardComp from '../ConnectionMiniCard/RequestMiniCardComp'

//styles
import "./ConnectionsContainerStyles.css"
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap'
// import PendingMiniCardComp from '../ConnectionMiniCard/PendingMiniCardComp';

const ConnectionsContainerComp = (props) => {
    // states
    const [ basicActive, setBasicActive ] = useState('tab1');
    const [ pendingConnections, setPendingConnections ] = useState([])
    const [ activeConnections, setActiveConnections ] = useState([])
    const [ deniedConnections, setDeniedConnections ] = useState([])
    const [ requestedConnections, setRequestedConnections ] = useState([])

    // localStorage
    const userProfileID = localStorage.getItem('user_profile')

    // props
    const { connections } = props

    // helpers
    // write filter here that filters connection based on type of connections(pending, active, denied)
    const checkPending = (connection) => {
        let isCurrentUserProfile = connection.from_profile == userProfileID
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

    const checkRequested = (connection) => {
        let isCurrentUserProfile = connection.to_profile.id == userProfileID
        return connection.status === 'pending' && !isCurrentUserProfile
    }



    // effects
    useEffect(()=>{
      if (connections) {
          let newPendingList = connections.filter((item)=>(item.from_profile == userProfileID && item.status == 'pending'))
        //   console.log("PENDING:",newPendingList)
          setPendingConnections(newPendingList)
          let newActiveList = connections.filter((item)=>(item.from_profile == userProfileID && item.status == 'accepted') || (item.to_profile == userProfileID && item.status == 'accepted'))
        //   console.log("APPROVED:", newActiveList)
          setActiveConnections(newActiveList)
          let newDeniedList = connections.filter(checkDenied)
          setDeniedConnections(newDeniedList)

          let newRequestedList = connections.filter((item)=>(item.to_profile == userProfileID && item.status == 'pending'))
          console.log("Request List:", newRequestedList)
          setRequestedConnections(newRequestedList)
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
            return <MiniCardComp key={connection.id} connection={connection} setUserToMessage={props.setUserToMessage}/>
        })
        return newMiniCardList
    }

    const renderRequestMiniCardComps = (connectionsList) => {
        let newMiniCardList = connectionsList.map((connection)=>{
            return <RequestMiniCardComp key={connection.id} connection={connection} setUserToMessage={props.setUserToMessage}/>
        })
        return newMiniCardList
    }

    return (
        <Container className="connectionsContainer">
           {/* This contains all the approved and pending connections */}
           <div className="tabs">
            <MDBTabs className='mb-3'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        Connections
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink  className='pending-tab' onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        Pending
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                        Connection Requests
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
                <div className="tab-content">
                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive === 'tab1'}>
                            {activeConnections ? renderMiniCardComps(activeConnections) : <></>}
                            </MDBTabsPane>
                        <MDBTabsPane show={basicActive === 'tab2'}>
                            {/* <PendingMiniCardComp/> */}
                            {pendingConnections ? renderMiniCardComps(pendingConnections) : <></>}
                            </MDBTabsPane>
                        <MDBTabsPane show={basicActive === 'tab3'}>
                            {requestedConnections ? renderRequestMiniCardComps(requestedConnections) : <></>}
                            </MDBTabsPane>
                    </MDBTabsContent>
                </div>
           </div>
            
        </Container>
    )
}

export default ConnectionsContainerComp
