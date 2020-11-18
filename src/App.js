
import React from "react";

function Food({fav}){
  return (
    <div>
         <h1> i love {fav}</h1>
    </div>
  )
}

function App(){


  return (
    <div>

  <h1> Hello! </h1>
  <Food fav="kimchi"/>
  <Food fav="ramen"/>
  <Food fav="samgiopsal"/>
  <Food fav="chukumi"/>
  </div>
  )
}

export default App;