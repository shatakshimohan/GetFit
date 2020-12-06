import React, { Component } from 'react';
import axios from 'axios'; //to send HTTP requests to our backend
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) { //initial state
    super(props); //super(props) is called when making a constructor of a subclass

    //to make sure 'this' works properly in our methods, we need to bind the methods to 'this'
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  } //this is how we create variables in React(using constructor)
  
  //following code for selecting the user associated with the exercise from a drop down list
  componentDidMount() { //componentDidMount() is part of the React life cycle and is invoked immediately after a component is mounted
    axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ 
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                });
            }
        })
        .catch((error) => {
            console.log(error);
        })
  }

  //following code for updating the state properties
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    }); //date picker library installed for 'date'
  }

  //to handle the submit event of the form
  onSubmit(e) {
    e.preventDefault(); //prevents default HTML submit behaviour
  
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    }; //after the form is submitted, the location is updated so the user is taken back to the home page

    //connecting our code to the backend
    console.log(exercise);
    axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));
    
    window.location = '/';
  }

  // the form code
  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}