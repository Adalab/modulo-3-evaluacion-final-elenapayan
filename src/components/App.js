import React from 'react';
import '../stylesheets/App.css';
import { fetchCharacter } from '../services/CharacterService';
import logo from '../Rick_and_Morty_-_logo.png'
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterStore: []
    }
  }

  componentDidMount() {
    fetchCharacter()
      .then(data => {
        this.setState({
          characterStore: data.results
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <main>
          <CharacterList characters={this.state.characterStore} />

        </main>

      </React.Fragment>
    );
  }
}

export default App;
