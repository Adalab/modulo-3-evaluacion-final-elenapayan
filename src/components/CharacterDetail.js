import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CharacterDetail = (props) => {
  let icon;
  // console.log(props.character);
  const skull = "fas fa-skull";
  const heart = "fas fa-heartbeat";
  const unknown = "fas fa-question";
  if (props.character) {
    const { image, name, species, status, origin, episode } = props.character;
    if (status === 'Alive') {
      icon = heart
    } else if (status === 'Dead') {
      icon = skull
    } else {
      icon = unknown
    }

    return (
      <React.Fragment>
        <div className="details-container">
          <Link to="/" className="details-link"><span>&lt;</span> Volver</Link>
          <div className="card-details-container">
            <img className="card-image" src={image} alt={name} />
            <div className="card-text">
              <h3>{name}</h3>
              <p>Specie: {species}</p>
              <div className="status-container"><p className="status-paragraph">Status: {status}</p>
                <i className={icon}></i></div>
              <p>Planet: {origin.name}</p>
              <p>Episodes: {episode.length}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  } else {
    return <p>Cargando...</p>
  }
}

CharacterDetail.propTypes = {
  character: PropTypes.object
};

export default CharacterDetail;
