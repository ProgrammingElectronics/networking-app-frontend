import React from 'react'
import ProfileFormComp from '../components/ProfileForm/ProfileFormComp'

//putting the profile form in another page for now so I can more easily edit component
const CompleteProfilePage = () => {
    return (
        <div>
            <h1>This is where you fill out more info for profile</h1>
            <ProfileFormComp/>
        </div>
    )
}

export default CompleteProfilePage
