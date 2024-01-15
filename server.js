const express = require('express'); 
const bodyParser = require("body-parser");
var path = require("path");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(express.static("public"));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./public/forma.html'));
}); 

app.post('/submit', function(req,res){
    let name = req.body.name;
    let password = req.body.password;
    console.log(name, password)
    res.redirect("/")
}); 

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});
