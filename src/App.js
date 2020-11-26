import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

  }
  
  state={
    isLoading: true
  }

  getMovies=async()=>{
    const movies=await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  

  componentDidMount() {

  this.getMovies();

  }

  

  render() {

    const {isLoading}=this.state;

   

    return (

      <div>
        { isLoading ?  "Loading..." : " We are ready"}

      </div>
    );
  }
}

App.propTypes = {

};

export default App;