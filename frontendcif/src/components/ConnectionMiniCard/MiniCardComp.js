import { React, useState, useEffect } from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import ProfileAPI from '../../api/ProfileAPI'
//styles
import "./MiniCardStyles.css"

const MiniCardComp = (props) => {
    const [fromProfile, setFromProfile] = useState(null)
    const [toProfile, setToProfile] = useState(null)

    // props
    const { connection } = props
    console.log('minicardcomp | connection', connection)

    //helper variables
    let fromProfileID = connection['from_profile']
    let toProfileID = connection['to_profile']

    let token = localStorage.getItem("auth-user")
    
    const getFromProfile = async () => {
        try {
            if (connection) {
                let data = await  ProfileAPI.getProfileByID(token, fromProfileID);
                console.log('from profile data', data)
                setFromProfile(data)
            }
        } catch(e) {
            console.error(e)
        }
       
    }
    const getToProfile = async () => {
        if (connection) {
            let data = await  ProfileAPI.getProfileByID(token, toProfileID);
            console.log('to profile data', data)
            setToProfile(data)
            console.log(toProfile['is_professional'])
        }
    }
    useEffect(() => {
        getFromProfile()
        getToProfile()
      }, [])


    // card variables
    let imageURL = connection['from_profile']['img_url']
    // let firstName = connection['from_profile']['user']['first_name']
    // let firstName = toProfile['user']['first_name']
    // let lastName = connection['from_profile']['user']['last_name']
    // let role = connection['from_profile']['is_professional']
    // let bootcamp = connection['from_profile']['enrollment'][0]['bootcamp']['name']
    let status = connection['status']

    return (
        <div className="miniCard">
             {toProfile
                ?
                <>
              <MDBCard className="mdb-minicard" style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                    <MDBCol md='3'>

                    <MDBCardImage className="minicard-pic" style={{ maxHeight: '148px'}} src={toProfile['img_url']} alt='profile picture' fluid='true' />

                    {/* replace src with profile picture */}
                    </MDBCol>
                    <MDBCol md='6'>
                   
                    <MDBCardBody>
                        <MDBCardTitle>{toProfile['user']['first_name']} {toProfile['user']['last_name']}</MDBCardTitle>
                        <MDBCol>
                            {!toProfile['is_professional'] &&
                                <MDBCardText>Student: {toProfile['enrollment'][0]['bootcamp']['name']}</MDBCardText>
                            }
                            {toProfile['is_professional'] && 
                                <MDBCardText>Professional: {toProfile['enrollment'][0]['bootcamp']['name']}</MDBCardText>
                            }
                        </MDBCol>
                        <MDBCol>
                            {(toProfile['enrollment'][0]['bootcamp']['graduation_year'] !== "") &&  <MDBCardText><small>Graduated {toProfile['enrollment'][0]['bootcamp']['graduation_year']}</small></MDBCardText>}
                        </MDBCol>
                        <MDBCardText>
                            <small>Status: {status}</small>
                        </MDBCardText>
                    </MDBCardBody>
                   
                    </MDBCol>
                    
                    <MDBCol className="btn-col">
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
    )
}

export default MiniCardComp
