import React from 'react';
import '../stylesheets/App.css';
import { fetchCharacter } from '../services/CharacterService';
import logo from '../Rick_and_Morty_-_logo.png'
import CharacterList from './CharacterList';
import CharacterFilter from './CharacterFilter';


const includes = (haystack, needle) => {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterStore: [],
      search: ""
    }
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    fetchCharacter()
      .then(data => {
        this.setState({
          characterStore: data.results
        });
      });
  }

  handleInput(data) {
    this.setState({
      search: data.value
    })
  }

  filterCharacters() {
    return this.state.characterStore
      .filter(character => {
        return includes(character.name, this.state.search)
      })
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <main>
          <CharacterFilter handleInput={this.handleInput} />
          <CharacterList characters={this.filterCharacters()} />
        </main>

      </React.Fragment>
    );
  }
}

export default App;
