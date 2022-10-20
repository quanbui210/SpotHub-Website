import React from 'react';
import './GoTopBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GoTopBtn = ({goTop}) => {
    return <>
        <div className="go-top-btn" onClick={goTop}>scroll to top <FontAwesomeIcon className='top-icon' icon="fa-solid fa-caret-up" /></div>
    </>
}

export default GoTopBtn;