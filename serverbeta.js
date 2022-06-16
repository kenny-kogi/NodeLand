const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");


// app.get('/', (req, res) => {
//     console.log("App",req.app)
//     console.log("BaseURL",req.baseUrl)
//     console.log("Body", req.body)
//     console.log("HostName",req.hostname)
//     res.send("Good Morning")
// })


var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
  

// Basic Routing

app.get("/", (req, res) => {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

app.get("/index.html", (req, res) => {
    // res.sendFile(__dirname, + "/" + "index.htm");
    res.sendFile(__dirname + "/" + "index.htm");
    // res.send("Index.html");
})

app.post("/", (req, res) => {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

app.delete("/del_user", (req, res) => {
    console.log("get a DELETE Request");
    res.send('Delete the /del_user');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', (req, res) => {
    fs.readFile(__dirname + "/" + "users.json", "utf-8", (err, data) => {
        console.log(data)
        res.end(data)
    })
 })

// Create application/x-www-form-urlencoded parser
 const urlencodedParser = bodyParser.urlencoded({ extended: false })

 // Static Files
 app.use(express.static('public'));
 
 // This responds a GET request for abcd, abxcd, ab123cd, and so on
 app.get('/ab*cd', function(req, res) {   
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
 })

app.get("/process_get", urlencodedParser, (req, res) => {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
     };
     console.log(response);
     res.end(JSON.stringify(response));
})

app.post("/process_post", (req, res) => {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
     };
     console.log(response);
     res.end(JSON.stringify(response));
})

app.post("/addUser", (req, res) => {
    fs.readFile(__dirname + "/" + "users.json", "utf8", (err, data) => {
        data = JSON.parse(data)
        data["user4"] = user["user4"]
        console.log(data)
        res.end(JSON.stringify(data))
    })
})

app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

const server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})