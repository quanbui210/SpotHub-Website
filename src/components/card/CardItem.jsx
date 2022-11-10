import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const cardItem = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showTitle, setShowTitle] = useState(false)


  const updateTitleHandler = (event) => {
    setShowTitle(prevShow => !prevShow)
    // event.currentTarget.disabled = true
  }

    return ( 
    <Card style={{ width: '18rem' }}>
      <Card.Body className="card-body">
      <Card.Img variant="top" src={props.image} className="card-img" />
        <Card.Title>{props.name}</Card.Title>
        <Card.Text >
        <i><b className="card-text">{props.title}</b></i>
        {showTitle && <div key={Math.random() * 100}><span className='extra-content'>{props.extraContent}</span></div>}
        </Card.Text>
        <button  onClick={updateTitleHandler}  className='showBtn'>{showTitle ? 'Close' : 'More Details'}
        <FontAwesomeIcon icon="fa-solid fa-code"  className="code-icon"/>
        </button>
      </Card.Body>
    </Card>
    )
}

export default cardItem