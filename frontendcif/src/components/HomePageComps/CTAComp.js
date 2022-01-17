import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
// import img from '../../static/images/computer-illustration.png'
import { ChevronRight } from 'react-bootstrap-icons'
import img from '../../static/images/remote2.png'
import './CTAStyles.css'

//this is the 'call to action' at the bottom of splash page
const CTAComp = () => {
    return (
        <Container className='cta-container'>
            <div className='transition-statement'>
            <h2>We strive to create a central location where bootcamp students can make sense of the post-grad hustle and industry professionals can help them succeed.</h2>
            </div>
            <Row>
                <Col>
                    <h3 className='cta-users'>Current students and recent grads</h3>
                    <br/>
                    <h4>Use <span className='app-name'>codeForward</span> to:</h4>
                        <h5><ChevronRight className='cta-chevron'/>keep in touch with fellow coders</h5> 
                        <h5><ChevronRight className='cta-chevron'/>get career guidance from industry professionals</h5>
                        <h5><ChevronRight className='cta-chevron'/>connect with people who have skills and experience that interest you</h5>
                </Col>
                <Col>
                    <Image className='bottom-img' src={img}></Image>
                </Col>
                <Col>
                    <h3 className='cta-users'>Professionals:</h3>
                    <br/>
                    <h4>Use <span className='app-name'>codeForward</span> to:</h4>
                        <h5><ChevronRight className='cta-chevron'/>offer your expertise to newcomers navigating the job market</h5> 
                        <h5><ChevronRight className='cta-chevron'/>answer questions about anything you know, from coding languages to dev ops</h5>
                        <h5><ChevronRight className='cta-chevron'/>be a mentor in any capacity you wish</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default CTAComp
