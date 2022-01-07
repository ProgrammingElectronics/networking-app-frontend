// react-boostrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// css
import './HomePageStyle.css'

// components
import HeroDisplayComp from '../components/HomePageComps/HeroDisplayComp';
import ImageOverlayComp from '../components/HomePageComps/ImageOverlayComp';
import HookDisplayComp from '../components/HomePageComps/HookDisplayComp';
import NavbarComp from '../components/Navbar/NavbarComp';

const HomePage = () => {
    return (
        <Container fluid className='background'>
            <Container fluid>
                <NavbarComp />
            </Container>
            <Container >
                <HeroDisplayComp />
            </Container>
            <Container >
                <Row>
                    <Col>
                        <ImageOverlayComp />
                    </Col>
                    <Col>
                        <HookDisplayComp />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default HomePage
