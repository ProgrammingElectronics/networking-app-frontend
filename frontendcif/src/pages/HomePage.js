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

const HomePage = () => {
    return (
        <Container fluid className='background'>
            <Container fluid>
                <h1>This is the navbar holder</h1>
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
