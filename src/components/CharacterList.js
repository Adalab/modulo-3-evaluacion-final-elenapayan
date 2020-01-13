import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';


function CharacterList(props) {
  console.log(props.characters)
  return (
    < ul >
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

CharacterList.propTypes = {
  characters: PropTypes.array,
};


export default CharacterList;
