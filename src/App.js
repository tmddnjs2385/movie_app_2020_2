import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);

  }


  state={
    count: 0
  };

  add=()=>{
    console.log("add");
    this.setState(current=>({count:current.count+1}));
   
  }

  minus=()=>{
    console.log("minus");
    this.setState(current=>({count:current.count-1}));
    
  }

  render() {
    return (
      <div>

        <h1>The number is: {this.state.count}</h1>
        <h1>I'm a class component</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>

      </div>
    );
  }
}

App.propTypes = {

};

export default App;