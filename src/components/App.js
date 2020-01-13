import React from 'react';
import '../stylesheets/App.css';
import { fetchCharacter } from '../services/CharacterService';
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
          RICK Y MORTY
        </header>
        <main>
          <CharacterList />

        </main>

      </React.Fragment>
    );
  }
}

export default App;
