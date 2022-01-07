import { useState, React } from 'react'

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

const ConnectionsContainerComp = () => {
    //getConnections api call
    //getPendingConnections api call
    //setConnections to array of connections
    //setPendingConnections to array of pending connections

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };

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

                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === 'tab1'}><MiniCardComp/> <MiniCardComp/><MiniCardComp/></MDBTabsPane>
                        {/* pass props of array of connections here; also remove repeated MiniCardComp, put multiple in to simulate what scrolling looks like in container */}
                    <MDBTabsPane show={basicActive === 'tab2'}><PendingMiniCardComp/></MDBTabsPane>
                        {/* pass props of array of pending connections here */}
                </MDBTabsContent>
           </div>
            
        </div>
    )
}

export default ConnectionsContainerComp
