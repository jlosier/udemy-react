import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
        {name: 'Joe', age: 34},
        {name: 'Chelsea', age: 31},
        {name: 'Stephanie', age: 29}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked");
    // DON'T DO THIS:  this.state.persons[0].name = 'Joseph';
      this.setState({
          persons: [
              {name: newName, age: 34},
              {name: 'Chelsea', age: 31},
              {name: 'Stephanie', age: 27}
          ]
      })
  }

  // event gets passed by React by default
  nameChangedHandler = (event) => {
      this.setState({
          persons: [
              {name: 'Joe', age: 34},
              {name: 'Chelsea', age: 31},
              {name: event.target.value, age: 27}
          ]
      })
  }

  render() {
      const buttonStyle = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

    return (
      <div className="App">
          <h1>Hi, I'm a React app!</h1>
          <button
              style={buttonStyle}
              onClick={() => this.switchNameHandler('Joseph')}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Joseph!')}>My Hobbies: Racing</Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              changed={this.nameChangedHandler}/>
      </div>
    );
  }
}

export default App;
