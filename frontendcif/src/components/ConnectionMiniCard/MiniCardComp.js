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
    console.log(bootcamp)
    //for each connection, display a mini-card
    //mini card needs to grab the following data:
        // Profile Pic url done
        // First and last name inside of user done
        // Role (isProfessional or not)
        // And bootcamp graduated from done

    return (
        <div className="miniCard">
              <MDBCard className="mdb-minicard" style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                    <MDBCardImage classname="minicard-pic" style={{ maxHeight: '148px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-CP7ChC_RjSlZcIC59_FH4KBl41Enn74Zw&usqp=CAU' alt='...' fluid />
                    {/* replace src with profile picture */}
                    </MDBCol>
                    <MDBCol md='6'>
                    <MDBCardBody>
                        <MDBCardTitle>Firstname Lastname</MDBCardTitle>
                        <MDBCardText>
                        Professional | Code Platoon
                        </MDBCardText>
                        <MDBCardText>
                        <small>Graduated 2020</small>
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCol>
                    <MDBCol className="btn-col">
                        <MDBBtn class="btn btn-info btn-sm" href='#'>Details</MDBBtn>
                    </MDBCol>
                </MDBRow>
              </MDBCard>
        </div>
    )
}

export default MiniCardComp
