import React from 'react';
import PropTypes from 'prop-types';
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

CharacterCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  specie: PropTypes.string
};

export default CharacterCard;
