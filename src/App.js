import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);

  }

  state={
    isLoading: true,
    movies:[]
  }

  
  componentDidMount() {

    setTimeout(()=>{
      this.setState({
        isLoading:false
      });
    },3000);

  }

 
  render() {

    const {isLoading}=this.state;

    return (
      <div>
        {
          isLoading ? "Loading...": "We are ready"
        }
        
      </div>
    );
  }
}

App.propTypes = {

};

export default App;