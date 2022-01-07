import React from 'react'
import ConnectionMiniCardComp from '../ConnectionMiniCard/ConnectionMiniCardComp'

//styles
import "./ConnectionsContainerStyles.css"

const ConnectionsContainerComp = () => {
    return (
        <div className="connectionsContainer">
            <ConnectionMiniCardComp/>
            <ConnectionMiniCardComp/>
        </div>
    )
}

export default ConnectionsContainerComp
