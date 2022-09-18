import React from 'react';
import ServiceList from './ServiceList'
import  './Service.css'


const Services = (props) => {
    return (
    <div className='service-container'>
    <h1 className="service-title">SpotHub's Services</h1>
    <div className="service-row">
        {props.items.map(item => (
            <div className="service-column">
            <ServiceList title={item.title} description={item.description} image={item.image}/>
            </div>
        ))}
    </div>
    </div>
    )
}

export default Services