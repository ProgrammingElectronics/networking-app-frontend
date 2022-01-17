// react-bootstrap
import {Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// css
import './ImageOverlayComp.css';
import Graph from '../../static/images/bootcamp-graph.png'


const ImageOverlayComp = () => {
  const img1Url = 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  const img2Url = 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  const img3Url = 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  return (
    <Container className=''>
        <Image className='graph-img' src={Graph}></Image>
    </Container>
  )
}

export default ImageOverlayComp