const express = require('express')
const app = express()
const bodyParser = require('body-parser');

require('dotenv').config();
const usersRouter = require('./routes/users');

const port = process.env.PORT || 4000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/users', usersRouter);

//in Pool, connection is always open, no need to open and end--
//connection for every DB call, but expensive pgBoucer is use for live pooling
//Client is used here instead of pooling


app.get('/' , (req , res)=>{
   res.json({info: "Nodejs CRUD with PostgreSQL"});
});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))