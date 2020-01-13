import React from 'react';
import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  console.log(props.character, "detail");
  return (
    <React.Fragment>
      <Link to="/">Volver</Link>
      {!!props.character === false ? <h1>Cargando</h1> : <div>
        <img src={props.character.image} alt={props.character.name} />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
        <p>{props.character.status}</p>
        <p>{props.character.origin.name}</p>
        <p>{props.character.episode.length}</p>
      </div>}
    </React.Fragment>
  )
}

export default CharacterDetail;
