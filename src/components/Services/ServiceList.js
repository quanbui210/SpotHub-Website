import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ServiceList.css'

const ServiceList = ({title, description, image}) => {
    return (
    <div className="service-card__container">
        <img alt="top" src={image} className="service-card__img" />
        <div className="service-card__title">{title}</div>
        <div className="service-card__text">
            {description}
            
        </div>
        </div>
    )
}

export default ServiceList;