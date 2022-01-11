import React, { useContext, useState, useEffect } from 'react'
import ProfileFormComp from '../components/ProfileForm/ProfileFormComp'
import UserContext from '../contexts/UserContext';

const CompleteProfilePage = () => {
    const userContext = useContext(UserContext);
    const { user } = userContext;

    return (
        <div>
            <ProfileFormComp user={user}/>
        </div>
    )
}

export default CompleteProfilePage
