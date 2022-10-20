import React from 'react';
import ServiceList from './ServiceList'
import  './Service.css'


const Services = ({items}) => {
    return (
    <div className='service-container'>
    <h1 className="service-title">SpotHub's Services</h1>
    <div className="service-row">
        {items.map(item => (
            <div key={item.id} className="service-column">
            <ServiceList title={item.title} description={item.description} image={item.image}/>
            </div>
        ))}
    </div>
    </div>
    )
}

export default Services