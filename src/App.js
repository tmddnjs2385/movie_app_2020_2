import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from "./Movie";
import axios from "axios";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
  }

  state={
    isLoading: true,
    movies:[]
  }

  getMovies=async()=>{
    const
    {
      data:{
        data:{
          movies
        }
      }
    }=await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    this.setState({movies:movies, isLoading:false});
  }

  componentDidMount() {
  this.getMovies();
  }

  render() {
    const {isLoading, movies}=this.state;
    return (
      <section class="container">
      
        { isLoading ?  <div class="loader">

          <span class="loader__text">loading...</span>

        </div> : movies.map(movie=>(

          <Movie key={movie.id}
           id={movie.id} 
           year={movie.year} 
           title={movie.title}
           summary={movie.summary}
          poster={movie.medium_cover_image}>
          </Movie>

        ))}

      </section>
    );
  }
}

App.propTypes = {

};

export default App;