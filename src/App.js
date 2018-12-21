import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
        {id: 'adsf', name: 'Joe', age: 34},
        {id: 'adfs', name: 'Chelsea', age: 31},
        {id: 'asdfs', name: 'Stephanie', age: 29}
    ],
       showPersons: false
  }

  // event gets passed by React by default
  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.find(p => {
          return p.id === id;
      });

      const person = {...this.state.persons[personIndex]};

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
      // slice with no arguments copies the full array
      const persons = [...this.state.persons];

      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  // using the arrow function notation here b/c we need to have scope to "this" of the class
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }


  render() {
      const buttonStyle = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

      let persons = null;

      if ( this.state.showPersons ) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return <Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          key={person.id}
                          changed={(event) => this.nameChangedHandler(event, person.id)} />
                  })}
              </div>
          );
      }

    return (
      <div className="App">
          <h1>Hi, I'm a React app!</h1>
          <button
              style={buttonStyle}
              onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
