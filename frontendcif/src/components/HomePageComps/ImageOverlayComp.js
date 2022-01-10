// react-bootstrap
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// css
import './ImageOverlayComp.css';
import myVideo from "./Connect.mp4";


const ImageOverlayComp = () => {
  const img1Url = 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  const img2Url = 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  const img3Url = 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  return (
    <Container>
      {/* <Image className="small-image image-top" src={img1Url}></Image>
      <Image className="small-image image-middle" src={img2Url}></Image>
      <Image className="small-image image-bottom" src={img3Url}></Image> */}
      {/* playing around with videos */}
      <video width="100%" autoPlay loop muted>
          <source src={myVideo} type="video/mp4"></source>
        </video>
    </Container>
  )
}

export default ImageOverlayComp