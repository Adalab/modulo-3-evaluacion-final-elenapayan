import React from 'react';


function CharacterCard(props) {
  return (
    <li>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.specie}</p>
    </li>
  )
}


export default CharacterCard;
