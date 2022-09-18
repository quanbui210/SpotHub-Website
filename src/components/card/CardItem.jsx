import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const cardItem = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState(props.title);
  const updateTitle = (event) => {
    setTitle(prevContent => [...prevContent, <p><span className='extra-content'>{props.extraContent}</span></p>])
    event.currentTarget.disabled = true;
  }


    return ( 
    <Card style={{ width: '18rem' }}>
      <Card.Body className="card-body">
      <Card.Img variant="top" src={props.image} className="card-img" />
        <Card.Title>{props.name}</Card.Title>
        <Card.Text >
        <i><b className="card-text">{title}</b></i>
        </Card.Text>
        <Button onClick={updateTitle} variant="outline-light">More Details
        <FontAwesomeIcon icon="fa-solid fa-code"  className="code-icon"/>
        </Button>
      </Card.Body>
    </Card>
    )
}

export default cardItem