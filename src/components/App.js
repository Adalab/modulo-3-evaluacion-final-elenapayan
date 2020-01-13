import React from 'react';
import '../stylesheets/App.css';
import { fetchCharacter } from '../services/CharacterService';

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
      <div>
        Componente App
      </div>
    );
  }
}

export default App;
