import ImageOverlayComp from "./ImageOverlayComp"
// react-bootstrap
import {Container, Image, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Graph from '../../static/images/bootcamp-graph.png'
import { ChevronRight } from 'react-bootstrap-icons'
//styles
import './ImageOverlayComp.css'

const HookDisplayComp = () => {

  return (
    <Container className='hook-text'>
      {/* <h2>Reach out to fellow coders</h2> */}
      {/* <p className="attention-para">Life is hard as a new developer. It can sometimes feel like you are lost in an ocean with nowhere to go. Bootcamps are pumping out hundreds of new graduates a day. Soon there will be billions upon billions of software gradutes. Far too many to count. Whole will make it stop? Exponential growth must be curtailed. We strive to make a central location where people can make sense of the madness or help others succeed.</p> */}
      <Col>
        <h3>There are more bootcamp grads than ever hoping to break into the tech industry.</h3>
        <br/>
        <h4><ChevronRight className='chevron'/>306% Growth of Online Bootcamps</h4>
        <h4><ChevronRight className='chevron'/>Now over 120 University Bootcamps in the US</h4>
        <p>www.coursereport.com</p>
      </Col>
    </Container>
  )
}

export default HookDisplayComp