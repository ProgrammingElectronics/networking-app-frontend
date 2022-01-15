// react-bootstrap
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import LogoComp from "../Navbar/LogoComp";
// css
import './HeroDisplayCompStyle.css';
//images
import img1 from '../../static/images/dark-room1.jpg'
import img2 from '../../static/images/dark-room2.jpg'


const HeroDisplayComp = () => {
  const image_url = "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  return (
    <div>
        <div className="attention-getter">
      {/*
         <Row>
        <Col className='hero-text'> 
          <h2 className="attention-title">Expand your network with <span className='app-name'>codeForward</span></h2>
          <h3 className="attention-end">Connect with fellow coding bootcamp grads.</h3>
          <video width="100%" autoPlay loop muted>
            <source src={myVideo} type="video/mp4"></source>
          </video> 
        </Col>
        <Col>
          <Image className='hero-img' src={myImg}></Image>
          <p className="attention-para">Life is hard as a new developer. It can sometimes feel like you are lost in an ocean with nowhere to go. Bootcamps are pumping out hundreds of new graduates a day. Soon there will be billions upon billions of software gradutes. Far too many to count. Whole will make it stop? Exponential growth must be curtailed. We strive to make a central location where people can make sense of the madness or help others succeed.</p>
        
        </Col>
        </Row>
      */}
      
        <div className='hero-col-left'>
          <Image className='hero-img-2' src={img2}></Image>
        </div>
        <div className='hero-col-right'>
          <Image className='hero-img-1' src={img1}></Image>
        </div>
        
      </div>
      <div className='app-intro'>
          <h1>Expand your network with <span className='app-name'>codeForward</span>.</h1>
          <h3 className="attention-end">Connect with coding bootcamp grads like you.</h3>
        </div>
    </div>
  
     
  )
}

export default HeroDisplayComp