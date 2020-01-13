import React from 'react';



function CharacterFilter(props) {

  function handleInput(ev) {
    props.handleInput({
      value: ev.target.value
    })
  }

  return (
    <form action="" method="get">
      <label htmlFor="inputSearch"></label>
      <input type="text" id="inputSearch" name="inputSearch" placeholder="Busca tu personaje favorito" onChange={handleInput} />
    </form>
  )
}



export default CharacterFilter;
