import { React, useState, useEffect } from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import ProfileAPI from '../../api/ProfileAPI'
//styles
import "./MiniCardStyles.css"
import ProfileDetailsModalComp from '../ModalComps/ProfileDetailsModalComp';

const PendingMiniCardComp = (props) => {
    
    const [toProfile, setToProfile] = useState(null)
    

    // props
    const { connection } = props
    
    // console.log('minicardcomp | connection', connection)

    //helper variables
    let toProfileID = connection['to_profile']
    
    let token = localStorage.getItem("auth-user")
    const userProfileID = localStorage.getItem('user_profile')

    
    useEffect(() => {
        const getToProfile = async () => {
            if (connection) {
                let data = await  ProfileAPI.getProfileByID(token, toProfileID);
                
                setToProfile(data)
                
            }
        }   
        getToProfile()
    }, [])

    //card variables
    let status = connection['status']

    const renderMiniCard = () => {
       
        // const bootcampName = toProfile['enrollment'][0]['bootcamp']['name'];
        // const graduationYear = toProfile['enrollment'][0]['graduation_year'];
        // const isPro = toProfile['is_professional']
        // ######################################################################################
        // This case displays the connection where the user was requested.  
        // So it should show the FROM_PROFILE info
        // ###################################################################################
        
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

export default PendingMiniCardComp