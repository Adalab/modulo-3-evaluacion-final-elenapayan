import React from 'react';
import '../stylesheets/App.css';
import { fetchCharacter } from '../services/CharacterService';
import { Switch, Route } from 'react-router-dom';
import logo from '../Rick_and_Morty_-_logo.png';
import CharacterList from './CharacterList';
import CharacterFilter from './CharacterFilter';
import CharacterDetail from './CharacterDetail';


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
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
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


  renderCharacterDetail(props) {
    const routeId = parseInt(props.match.params.id);
    const character = this.state.characterStore.find(character => character.id === routeId);

    // console.log(props, "props match");
    return (<CharacterDetail
      character={character}
    />)
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <Switch>
          <Route exact path="/">
            <CharacterFilter handleInput={this.handleInput} value={this.state.search} />
            <CharacterList characters={this.filterCharacters()} />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>

      </React.Fragment>
    );
  }
}

export default App;
