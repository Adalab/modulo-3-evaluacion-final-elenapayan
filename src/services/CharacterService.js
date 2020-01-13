const randomCharacter = 'https://rickandmortyapi.com/api/character/';

const fetchCharacter = () => fetch(randomCharacter).then(response => response.json());

export { fetchCharacter };