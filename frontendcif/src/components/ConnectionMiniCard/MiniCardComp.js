import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

//styles
import "./MiniCardStyles.css"

const MiniCardComp = (props) => {
    // props
    const { connection } = props
    // card variables
    let imageURL = connection['from_profile']['img_url']
    let firstName = connection['from_profile']['user']['first_name']
    let lastName = connection['from_profile']['user']['last_name']
    let role = connection['from_profile']['is_professional']
    let bootcamp = connection['from_profile']['enrollment'][0]['bootcamp']['name']

    return (
        <div className="miniCard">
              <MDBCard className="mdb-minicard" style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>

                    <MDBCardImage className="minicard-pic" style={{ maxHeight: '148px'}} src={imageURL} alt='profile picture' fluid='true' />

                    {/* replace src with profile picture */}
                    </MDBCol>
                    <MDBCol md='6'>
                    <MDBCardBody>
                        <MDBCardTitle>{firstName} {lastName}</MDBCardTitle>
                        <MDBCardText>
                        Professional | {bootcamp}
                        </MDBCardText>
                        <MDBCardText>
                        <small>Graduated 2020</small>
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCol>
                    <MDBCol className="btn-col">
                        <MDBBtn className="btn btn-info btn-sm" href='#'>Details</MDBBtn>
                    </MDBCol>
                </MDBRow>
              </MDBCard>
        </div>
    )
}

export default MiniCardComp
