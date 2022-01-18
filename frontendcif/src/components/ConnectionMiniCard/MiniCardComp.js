import { React, useState, useEffect } from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import ProfileAPI from '../../api/ProfileAPI'
//styles
import "./MiniCardStyles.css"
import ProfileDetailsModalComp from '../ModalComps/ProfileDetailsModalComp';
import ViewProfileButtonComp from '../Profile/ViewProfileButtonComp';

const MiniCardComp = (props) => {
    
    const [toProfile, setToProfile] = useState(null)
    
    // props
    const { connection } = props
    console.log("rendering connection", connection)

    //helper variables
    let toProfileID = connection['to_profile']
    let fromProfileID = connection['from_profile']
    let token = localStorage.getItem("auth-user")
    let userProfileID = localStorage.getItem("user_profile")
    
    useEffect(() => {
        
        console.log("This is the current user",userProfileID)
        console.log("This who did not make the request",toProfileID)
        console.log("This is who made the request",fromProfileID)
        
        let renderProfileID;

        if (userProfileID != toProfileID) {
            renderProfileID = toProfileID
        } else {
            renderProfileID = fromProfileID
        };

        const getToProfile = async () => {
            if (connection) {
                let data = await  ProfileAPI.getProfileByID(token, renderProfileID);
                setToProfile(data)
            }
        }   
        getToProfile()
    }, [])

    //card variables
    let status = connection['status']

    const renderMiniCard = () => {
        return (
            <div>
              <MDBCard className="mdb-minicard">
                <MDBRow className='g-0'>
                    <MDBCol className='img-col' md='3'>
                        <MDBCardImage className="minicard-pic" src={toProfile['img_url']} alt='profile picture' fluid='true' />
                    </MDBCol>

                    <MDBCol >
                    
                        <MDBCardBody>
                            <MDBCardTitle>{toProfile['user']['first_name']} {toProfile['user']['last_name']}</MDBCardTitle>
                            <MDBCol>
                            {toProfile['enrollment'][0] ?
                            <>
                            <MDBCardText>{toProfile['enrollment'][0]['bootcamp']['name']} <small>{toProfile['enrollment'][0]['graduation_year']}</small></MDBCardText>
                            </>
                            :
                            <>
                            {null}
                            </>
                            }                                
                            </MDBCol>
                            <MDBCardText>
                                <small>Status: {status}</small>
                            </MDBCardText>
                            <MDBRow>
                                <MDBCol className="btn-col">
                                    <ProfileDetailsModalComp profile={toProfile}/>
                                    <MDBBtn className="btn btn-info btn-sm" onClick={()=>{props.setUserToMessage(toProfile)}}>Message</MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>                   
                    </MDBCol>                               
                </MDBRow>
              </MDBCard>
            </div>
        );
    }


    
    
         return (
            
        <div className="miniCard">
            {toProfile && renderMiniCard()}
        </div>
             
    )
         
}

export default MiniCardComp
