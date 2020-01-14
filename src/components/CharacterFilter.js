import React from 'react';
import PropTypes from 'prop-types';


function CharacterFilter(props) {

  function handleInput(ev) {
    props.handleInput({
      value: ev.target.value
    })
  }

  return (
    <form className="form-container" action="" method="get">
      <label htmlFor="inputSearch"></label>
      <input className="form-input" type="text" id="inputSearch" name="inputSearch" placeholder=" Busca tu personaje favorito" onChange={handleInput} value={props.value} />
    </form>
  )
}

CharacterFilter.propTypes = {
  handleInput: PropTypes.func,
  value: PropTypes.string
};

export default CharacterFilter;
