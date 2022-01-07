import React from 'react'
import MiniCardComp from '../ConnectionMiniCard/MiniCardComp'

//styles
import "./ConnectionsContainerStyles.css"

const ConnectionsContainerComp = () => {
    return (
        <div className="connectionsContainer">
            <div>
                Connections here
            </div>
            <MiniCardComp/>
        </div>
    )
}

export default ConnectionsContainerComp
