import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand"><span class="mb-0 h1">GetFit</span></Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link" class="text-light">Home</Link>
          <li className="navbar-item">
          <Link to="/user" className="nav-link" class="text-light">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link" class="text-light">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/exercise" className="nav-link" class="text-light">Exercises</Link>
          </li>
          
         
      </li>
        </ul>
        </div>
      </nav>
    );
  }
}