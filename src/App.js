import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; // React Router imported
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap's CSS file imported

import Navbar from "./components/navbar.component"
import Home from "./components/home.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
//all component files imported into App.js for router navigation


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/exercise" component={ExercisesList} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}//The path attribute sets the url path. The component is the code that will be loaded when a user goes to that path


export default App;
