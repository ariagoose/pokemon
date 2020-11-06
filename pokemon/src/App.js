
import React from 'react'

class App extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {    
  return (
    <div className="App">
      <header className="App-header">
        <h2>Pokemon Searcher</h2>
        <form>
            <label for="poke">Pokemon Name: </label>
            <input type="text" name="pokemon" placeholder="works?"></input>
            <input type="submit" name="submit" value="Submit"/>
          </form>
      </header>
      <PokeSearch item={this.state.TodoItem} deleteEvent={this.deleteItem} updateItem={this.updateItem}/>
    </div>
    
    
  );
}
}

export default App;
