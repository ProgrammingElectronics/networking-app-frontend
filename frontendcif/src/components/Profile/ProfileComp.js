import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
//components
import ProfilePicComp from './ProfilePicComp'
import EditProfileButtonComp from './EditProfileButtonComp'
//styles 
import "./ProfileStyles.css"
const ProfileComp = () => {

    const renderProfile = () => {
        //if (!props.user)
            //return null

        return (
            <div className="profileInfoContainer">
                <div className="introInfo">
                    {/*replace with profile data*/}
                    <h3>Kristen Ruprecht</h3>
                    {/* Role | Bootcamp */}
                    <h5>Recent Grad | Code Platoon</h5>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
                        <MDBIcon fab icon='instagram' size='lg' />
                    </MDBBtn>
                    <p>Github: link | LinkedIn: link</p>
                </div>
                <div className="aboutMe">
                    <h6>About Me:</h6>
                       {/*replace with profile data*/}
                    <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    </p>
                </div>
                <div className="experiences">
                    <h6>Experiences</h6>    
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
            <ProfilePicComp/>
            <EditProfileButtonComp/> {/* Might move this button */}
            {renderProfile()}
        </div>
    )
}

export default ProfileComp
