import { React, useState, useEffect } from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import ProfileAPI from '../../api/ProfileAPI'
//styles
import "./MiniCardStyles.css"

const MiniCardComp = (props) => {
    // const [fromProfile, setFromProfile] = useState(null)
    const [toProfile, setToProfile] = useState(null)

    // props
    const { connection } = props
    // console.log('minicardcomp | connection', connection)

    //helper variables
    let fromProfileID = connection['from_profile']
    let toProfileID = connection['to_profile']

    let token = localStorage.getItem("auth-user")
    
    const getToProfile = async () => {
        if (connection) {
            let data = await  ProfileAPI.getProfileByID(token, toProfileID);
            setToProfile(data)
        }
    }
    useEffect(() => {
        // getFromProfile()
        getToProfile()
      }, [])

    //card variables
    let status = connection['status']

    const renderMiniCard = () => {

        return (
            <div>
                {toProfile
                ?
                <>
              <MDBCard className="mdb-minicard" style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                    <MDBCol className='img-col' md='3'>
                        <MDBCardImage className="minicard-pic" src={toProfile['img_url']} alt='profile picture' fluid='true' />
                    </MDBCol>

                    <MDBCol >
                    
                        <MDBCardBody>
                            <MDBCardTitle>{toProfile['user']['first_name']} {toProfile['user']['last_name']}</MDBCardTitle>
                            <MDBCol>
                                {!toProfile['is_professional'] &&
                                    <MDBCardText>Student: {toProfile['enrollment'][0]['bootcamp']['name']} <small>{toProfile['enrollment'][0]['graduation_year']}</small></MDBCardText>
                                }
                                {toProfile['is_professional'] && 
                                    <MDBCardText>Professional: {toProfile['enrollment'][0]['bootcamp']['name']} <small>{toProfile['enrollment'][0]['graduation_year']}</small></MDBCardText>
                                }
                            </MDBCol>
                            <MDBCardText>
                                <small>Status: {status}</small>
                            </MDBCardText>
                        </MDBCardBody>
                   
                    </MDBCol>
                    
                    <MDBCol md='2' className="btn-col">
                        <MDBBtn className="btn btn-info btn-sm" href='#'>Details</MDBBtn>
                    </MDBCol>
                </MDBRow>

              </MDBCard>
              </>
              :
              <>
              {null}
              </>
                }
            </div>
        );
    }

    return (
        <div className="miniCard">
            {renderMiniCard()}
        </div>
    )
}

export default MiniCardComp
