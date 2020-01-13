import React from 'react';
import { Link } from 'react-router-dom';


function CharacterCard(props) {
  const route = `/character/${props.id}`;
  return (
    <Link to={route}>
      <li>
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.specie}</p>
      </li>
    </Link>
  )
}


export default CharacterCard;
