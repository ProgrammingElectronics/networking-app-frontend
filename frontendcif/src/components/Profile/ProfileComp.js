import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
//components
import ProfilePicComp from './ProfilePicComp'
import EditProfileButtonComp from './EditProfileButtonComp'
//styles 
import "./ProfileStyles.css"
const ProfileComp = (props) => {

    //props
    const { profile } = props
    console.log('profilecomp | profile', profile)

    const renderProfile = () => {

        if (!profile)
            return null


        return (
            <div className="profileInfoContainer">
                <div className="introInfo">
                    <h3>{profile['user']['first_name']} {profile['user']['last_name']}</h3>
                    {/* Role | Bootcamp */}
                    <h5>{profile['enrollment'][0]['bootcamp']['name']} | {profile['enrollment'][0]['graduation_year']}</h5>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
                        <MDBIcon fab icon='instagram' size='lg' />
                    </MDBBtn>
                    <p>Github: link | LinkedIn: link</p>
                </div>
                <div className="aboutMe">
                    <h6>About Me:</h6>
                    <p>{profile['about_me']}</p>
                </div>
                <div className="experiences">
                    <h5>Experience</h5>    
                    <div className="industries">
                        <h6>Industries</h6>
                        <ul>
                        {
                            profile['industries'].map((industry, index) =>
                                <li key={index}>{industry.name}</li>
                        )}
                        </ul>
                        {/* figure out size of companies */}
                    </div>
                    <div className="skills">
                       <h5>Skills</h5>
                       <h6>Languages:</h6>
                       <ul>
                       {profile['skills'].filter(skills => skills.type === 'language').map((language, index) =>
                            <li key={index}>{language.name}</li>
                       )}
                       </ul>
                        {/* refactor later to pull in skills['types'] instead of hardcoding */}
                        <h6>Web Development:</h6>
                        <ul>
                            {profile['skills'].filter(skills => skills.type === 'Web Development').map((framework, index) =>
                                    <li key={index}>{framework.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <ProfilePicComp profile={profile}/>
            <EditProfileButtonComp/>
            {renderProfile()}
        </div>
    )
}

export default ProfileComp
