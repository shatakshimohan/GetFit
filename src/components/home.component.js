import React, { Component } from 'react';
    export default class Home extends Component {
        render() {
          return (
            <div>
        <title>W3.CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-win8.css" />
        <div className="w3-container w3-win8-teal">   
              <h1 style={{textAlign:"center",color:'white'}}>Welcome to GetFit!</h1>
              <br></br>
              <p style={{color: 'white',fontSize:25,textAlign:'center'}}>
                Fitness has become an essential part of our daily lives, 
                with everyone busy with their hectic schedules its harder to find time to exercise.
                And harder still to stay motivated towards our goals.
                Here at GetFit we make an attempt to solve atleast one of your problems ,
                that is to help you
                keep track of the effort and time you've invested towards your fitness goals.
              <br></br>                 So what're you waiting for?</p><br></br>
              <h3 style={{color: 'white',textAlign:"center",fontSize:50}}>READY.STEADY.GO!</h3>
            </div>
            </div>
          )
        }
    }
