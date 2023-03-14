import React, {Component} from 'react';
import './App.css';
import './components/card-list/Cardlist'
import { Cardlist } from './components/card-list/Cardlist';
import { SearchBox } from './components/search-box/Search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

render() {
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox 
        placeholder='search monsters'
        handleChange={e => this.setState({searchField: e.target.value })}
      />
     <Cardlist monsters={filteredMonsters} />
    </div>
  );
}
}

export default App;
