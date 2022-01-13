// react-bootstrap
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import LogoComp from "../Navbar/LogoComp";
// css
import './HeroDisplayCompStyle.css';
import myVideo from "./HelloWorld.mp4";
import myImg from './startup2.jpg'

const HeroDisplayComp = () => {
  const image_url = "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  return (
    <Container className="attention-getter">
      <Row>
        <Col className='hero-text'> 
          <h2 className="attention-title">Expand your network with <span className='app-name'>codeForward</span></h2>
          {/* <h4 className="attention-end">Waste no time you filthy animal. Join today.</h4> */}
          <h3 className="attention-end">Connect with fellow coding bootcamp grads.</h3>
          {/* <video width="100%" autoPlay loop muted>
            <source src={myVideo} type="video/mp4"></source>
          </video> */}
        </Col>
        <Col>
          <Image className='hero-img' src={myImg}></Image>
          {/* <p className="attention-para">Life is hard as a new developer. It can sometimes feel like you are lost in an ocean with nowhere to go. Bootcamps are pumping out hundreds of new graduates a day. Soon there will be billions upon billions of software gradutes. Far too many to count. Whole will make it stop? Exponential growth must be curtailed. We strive to make a central location where people can make sense of the madness or help others succeed.</p> */}
        
        </Col>
      </Row>
    </Container>
  )
}

export default HeroDisplayComp