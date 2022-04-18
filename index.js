const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const  Client =require('pg');
require('dotenv').config();


const port = process.env.PORT || 4000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/' , (req , res)=>{
   res.json({info: "Nodejs CRUD with PostgreSQL"});
});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))