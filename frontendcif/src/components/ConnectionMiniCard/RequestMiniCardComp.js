import { React, useState, useEffect } from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import ProfileAPI from '../../api/ProfileAPI'
//styles
import "./MiniCardStyles.css"
import ProfileDetailsModalComp from '../ModalComps/ProfileDetailsModalComp';
import ViewProfileButtonComp from '../Profile/ViewProfileButtonComp';
import ConnectionRequestAPI from '../../api/ConnectionRequestAPI';

const RequestMiniCardComp = (props) => {
    // const [fromProfile, setFromProfile] = useState(null)
    const [toProfile, setToProfile] = useState(null)
    const [fromProfile, setFromProfile] = useState(null)

    // props
    const { connection } = props
    // console.log('minicardcomp | connection', connection)

    //helper variables
    let fromProfileID = connection['from_profile']
    let toProfileID = connection['to_profile']
    let connectionID = connection['id']
    console.log("Connection ID:", connectionID)

    let token = localStorage.getItem("auth-user")

    
    useEffect(() => {
        const getFromProfile = async () => {
            if (connection) {
                let data = await  ProfileAPI.getProfileByID(token, fromProfileID);
                setFromProfile(data)
            }
        }   
        getFromProfile()
    }, [])

    //card variables
    let status = connection['status']

    const renderMiniCard = () => {

      const connectionHandler = async () => {
    
        console.log("ProfileCardComp | connectionHandler | e.target", toProfileID)
        const userToken = localStorage['auth-user']
    
        const connectionObj = {
          "from_profile": fromProfileID,
          "to_profile": toProfileID, // this is me
          "status": "accepted"
        }
    
        await ConnectionRequestAPI.updateConnection(userToken, connectionObj, connectionID)
    
      }
       
        // const bootcampName = toProfile['enrollment'][0]['bootcamp']['name'];
        // const graduationYear = toProfile['enrollment'][0]['graduation_year'];
        // const isPro = toProfile['is_professional']

        return (
            <div>
              <MDBCard className="mdb-minicard">
                <MDBRow className='g-0'>
                    <MDBCol className='img-col' md='3'>
                        <MDBCardImage className="minicard-pic" src={fromProfile['img_url']} alt='profile picture' fluid='true' />
                    </MDBCol>

                    <MDBCol >
                    
                        <MDBCardBody>
                            <MDBCardTitle>{fromProfile['user']['first_name']} {fromProfile['user']['last_name']}</MDBCardTitle>
                            <MDBCol>
                            {fromProfile['enrollment'][0] ?
                            <>
                            <MDBCardText>{fromProfile['enrollment'][0]['bootcamp']['name']} <small>{fromProfile['enrollment'][0]['graduation_year']}</small></MDBCardText>
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
                                    <ProfileDetailsModalComp profile={fromProfile}/>
                                    <MDBBtn className="btn btn-info btn-sm" onClick={()=>{props.setUserToMessage(fromProfile)}}>Message</MDBBtn>
                                    <MDBBtn className="btn btn-info btn-sm" onClick={connectionHandler}>Accept</MDBBtn>
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
            {fromProfile && renderMiniCard()}
        </div>
    )
}

export default RequestMiniCardComp