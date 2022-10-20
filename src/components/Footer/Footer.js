
import React, {useState} from 'react'
import FooterForm from './FooterForm'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

 const Footer = () => {
 

  return (
    <div>
    
    <Container className="footer-container">
        <a href="/" className='nav-name footer-title'>SpotHub <FontAwesomeIcon icon="fa-solid fa-code" /></a>
        <Row>
            <Col>
                <div className="footer-desc">
                    <p className="footer-text">
                        SpotHub Labs is a technology company specializing in industry-specific solutions.
                        We leverage and extend <br></br> the HubSpot platform to power world-leading customer operations. 
                        SpotHub Labs is a technology company specializing in <br></br> industry-specific solutions.
                        We leverage and extend the HubSpot platform to power world-leading customer operations.
                    </p>
                    <div className="footer-icon-container">
                        <FacebookIcon className="social-icon" fontSize='large'/>
                        <InstagramIcon className="social-icon" fontSize='large'/>
                        <LinkedInIcon className="social-icon" fontSize='large'/>
                    </div>
                </div>
            </Col>
            <Col><FooterForm /></Col>
        </Row>
        <p className='copyright'>Copyright © 2022 SpotHub Labs All Rights Reserved.</p>
    </Container>
    </div>
      )
}

export default Footer