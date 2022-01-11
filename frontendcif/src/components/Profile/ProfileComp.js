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
                    <h5>Experiences</h5>    
                    <div className="industries">
                        <h6>Industries</h6>
                        {/* replace the following with a map function that maps each result of api call to backend 
                            something like: 
                                {
                                    industries.map((industry, index) =>
                                        <div key={index}>{industry}</div>
                                )}
                            
                            *can probably also map corresponding years of experience and size of company here too? 
                        */}
                        <p>Pharma, Healthcare, Finance</p>
                    </div>
                    <div className="skills">
                         {/* replace the following divs with a map function that maps each result of api call to backend in a div  
                            something like: 
                                {
                                    skills.map((skill, index) =>
                                        <div key={index}>{skill}</div>
                                )}
                            *have to figure out how to map them into appropriate skill types
                        */}
                        <h6>Languages:</h6>
                            <div className="languageDiv">
                                <p>Javascript, Python, C++</p>
                            </div>
                            
                        <h6>Frameworks:</h6>
                            <div className="frameworksDiv">
                                <p>Django, React, Springboot</p>
                            </div>
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
