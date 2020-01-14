import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';


function CharacterList(props) {
  // console.log(props.characters)
  if (props.characters.length > 0) {
    return (
      < ul className="list-container">
        {props.characters.map((character, key) => {
          return (
            <CharacterCard
              key={key}
              id={character.id}
              img={character.image}
              name={character.name}
              specie={character.species}
            />
          )
        })}
      </ul >
    )
  }
  else {
    return (<p>Personaje no encontrado, prueba con otro nombre</p>)
  }
}
CharacterList.propTypes = {
  characters: PropTypes.array,
};


export default CharacterList;
