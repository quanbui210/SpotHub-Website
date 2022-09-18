import './navItem.css'
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from 'react-bootstrap/Nav';


const navItem = () => {
    return (
        <>
    <ul className='nav-list'> 
         <a href="/" className='nav-name'>SpotHub <FontAwesomeIcon icon="fa-solid fa-code" /></a> 
          <Nav className="nav-item-container" bg="light" variant="light">
            <Nav className="nav-item" href="#home">Home</Nav>
            <Nav className="nav-item" href="#features">Services</Nav>
            <Nav  className="nav-item" href="#pricing">Team</Nav>
          </Nav>
      </ul>
    </>

    )
}

export default navItem