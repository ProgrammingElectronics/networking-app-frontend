import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

//styles
import "./MiniCardStyles.css"

const PendingMiniCardComp = () => {
    //for each connection, display a mini-card
    //mini card needs to grab the following data:
        // Profile Pic
        // First and last name
        // Role (isProfessional or not)
        // And bootcamp graduated from

    return (
        <div className="miniCard">
              <MDBCard style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                    <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-CP7ChC_RjSlZcIC59_FH4KBl41Enn74Zw&usqp=CAU' alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle>Firstname Lastname</MDBCardTitle>
                        <MDBCardText>
                        Professional | Hack Reactor
                        </MDBCardText>
                        <MDBCardText>
                        <small className='text-muted'>Graduated 2019</small>
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBBtn disabled>Pending</MDBBtn>
                    </MDBCol>
                </MDBRow>
              </MDBCard>
        </div>
    )
}

export default PendingMiniCardComp