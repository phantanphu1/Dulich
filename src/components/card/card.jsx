import "./card.scss";
import React from 'react';
import { Button, Segment } from "semantic-ui-react";
function Card(props){
    const item = props.product;
    return(
        <Segment className="Card-container">
             <img className="image" src={item.image} />
             <h4 className="name">{item.name}</h4>
             {/* <h4 className="information">{item.information}</h4> */}
             <h4 className="price">{item.price}</h4>
             <Button basic>VIEW MORE</Button>

        </Segment>
    )
}
export default Card;