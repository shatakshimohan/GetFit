import React, { Component } from 'react';
import axios from 'axios'; //to send HTTP requests to our backend

export default class CreateUser extends Component {
    constructor(props) {
        super(props); //super(props) is called when making a constructor of a subclass

        //to make sure 'this' works properly in our methods, we need to bind the methods to 'this'
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          username: ''
        };
    }

    // methods to change the username and submit the form
    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
          username: this.state.username,
        };
        console.log(newUser);

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));
        
        this.setState({
          username: ''
        })
    }

    //form code
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}