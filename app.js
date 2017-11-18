var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var route = require('./router/route');

var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb @ 27017');
});

//on error
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error connecting to mongodb : ' + err);
    }
});

//port
const port = 3000;

//adding middleware
app.use(cors());

//body parser
app.use(bodyparser.json());

//routes
app.use("/api", route);

//testing
app.get('/',(req, res)=>{
    res.send('rip imba');
});

//stati files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, ()=>{
    console.log("server started at port: "  + port);
});


