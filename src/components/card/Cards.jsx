import CardItem from "./CardItem";
import './Cards.css'
const Cards = (props) => {
    return (
      <div>
      <h1 className="page-title">SpotHub Team Members</h1>
      <p className="subtitle"><i>Get to know our team</i></p>
      <div className="row">
       {props.contents.map(content => (<div className="column">
        <CardItem className="card-extra" name={content.name} title={content.title} image={content.image} extraContent={content.description}/>
       </div>) )} 
      </div>
      </div>
    )
}

export default Cards