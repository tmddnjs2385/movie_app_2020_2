import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from "./Movie";
import axios from "axios";
import "./App.css"

class App extends Component {
 

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
      <section className="container">
        { isLoading ?  <div className="loader">
          <span className="loader__text">loading...</span>
        </div> : <div className="movies">{movies.map(movie=>(
        <Movie key={movie.id}
         id={movie.id} 
         year={movie.year} 
         title={movie.title}
         summary={movie.summary}
         poster={movie.medium_cover_image}
         genres={movie.genres}>
        </Movie>))}</div>
}
      </section>
    );
  }
}


export default App;