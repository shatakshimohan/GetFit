//Node.js/Express server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //for connecting server to the mongodb database

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; // ATLAS_URI environment variable for mongodb connection string
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } //flag part added because the MongoDB Node.js driver rewrote the tool it uses to parse MongoDB connection strings
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully"); //indicates our server has been connected to the MongoDB database in the terminal
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter); //takes the user to the exercises page
app.use('/users', usersRouter) //takes the user to the users page

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
