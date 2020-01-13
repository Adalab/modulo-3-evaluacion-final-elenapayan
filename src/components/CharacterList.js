import React from 'react';
import CharacterCard from './CharacterCard';


function CharacterList(props) {
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



export default CharacterList;
