import React from 'react';
import Button from 'react-bootstrap/Button';
import './Buttons.css'

const Buttons = (props) => {
    return <Button className='button' variant="outline-secondary">{props.text}</Button>
}

export default Buttons