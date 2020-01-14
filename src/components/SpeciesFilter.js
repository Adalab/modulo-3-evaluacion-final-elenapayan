import React from 'react';

function SpeciesFilter(props) {
  return (
    <React.Fragment>
      <form>
        <label htmlFor="human"></label>
        <input type="checkbox" id="human" name="human" value="human" checked={props.maleFilter} onChange={props.handleClick} />
        Human
        <label htmlFor="alien"></label>
        <input type="checkbox" id="alien" name="alien" value="alien" checked={props.femaleFilter} onChange={props.handleClick} />
        Alien
      </form>
    </React.Fragment>
  )
}

export default SpeciesFilter;