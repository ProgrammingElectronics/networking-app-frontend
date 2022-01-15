import { useContext } from "react";

// redirect for user navigation handling
import { Navigate } from "react-router-dom";

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

// context
import UserContext from "../contexts/UserContext";
import CTAComp from "../components/HomePageComps/CTAComp";

const HomePage = () => {

    // context
    const userContext = useContext(UserContext);
    const { user } = userContext;

    // if user logs in, redirect to dashboard
    if (user) {
        return <Navigate to="/dashboard"/>
    }

    return (
        <Container fluid className='background'>
            <Container fluid>
                <NavbarComp />
            </Container>
            <Container className='top' fluid>
                <HeroDisplayComp />
            </Container>
            <Container fluid className='middle'>
                <Row>
                    <Col>
                        <ImageOverlayComp />
                    </Col>
                    <Col>
                        <HookDisplayComp />
                    </Col>
                </Row>
            </Container>
            <Container fluid className='bottom'>
                <CTAComp/>
            </Container>
        </Container>
    )
}

export default HomePage
