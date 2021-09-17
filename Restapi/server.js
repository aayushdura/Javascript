require('dotenv').config();

const express= require('express');
const cors= require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port= process.env.PORT||4000;

//static data
const userData = {
    username: "aayushdura",
    password: "123456",   
    };

//enable cors
app.use(cors());
//parse application /json
app.use(bodyParser.json());
//parse application
app.use(bodyParser.urlencoded({extended:true}));




app.get('/', (req, res)=>{
    res.send('Hiluuuu Aayushi');
});
app.listen(port, () =>{
    console.log('Listening at port:'+port);
});