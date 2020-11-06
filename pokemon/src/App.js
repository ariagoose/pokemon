
import React from 'react'
import Form from './Form'
import PokeSearch from './PokeSearch'

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      pokemonName : "",
      pokemonStats: ""
    }
  }


  handleNameInsertion = (event) => {
    event.preventDefault();
    this.setState({pokemonName: event.target.value})
  }

  handleSearch = (event) => {
    event.preventDefault()     
    let data = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(poke => poke.json())
      .then(poke => JSON.stringify(poke))
      .catch(err => {return err})
    this.setState({pokemonStats: data})
    }

  render() {    
  return (
    <div>      
      <header>
      <h2>Pokemon Searcher</h2>             
      </header>
        <Form onNameInsertion={this.handleNameInsertion} 
              onSearch={this.handleSearch}/>
        <PokeSearch fetchData={this.state.pokemonStats}/>
    </div>
    
  );
}
}

export default App;





/*

<ToDoList toDoItems={this.state.toDoItems} 
                  onDelete={this.handleDelete}
                  onUpdate={this.handleItemInputChange}
                  onItemUpdate={this.handleUpdate}

*/