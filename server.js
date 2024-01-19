// const express = require('express'); 
// const bodyParser = require("body-parser");
// var path = require("path");
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true}))
// app.use(bodyParser.json())

// app.use(express.static("public"));

// app.get('/', function(req,res){
//     res.sendFile(path.join(__dirname,'./public/forma.html'));
// }); 

// app.post('/submit', function(req,res){
//     let name = req.body.name;
//     let password = req.body.password;
//     console.log(name, password)
//     res.redirect("/")
// }); 

// app.listen(port, () => {
//    console.log(`Server is running at http://localhost:${port}`);
// });

const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://mherkaroyan:M2h0e0r9^@cluster0.crtiwy0.mongodb.net/?retryWrites=true&w=majority';


// Connect to MongoDB
mongoose.connect(connectionString, { useUnifiedTopology: true });

// Check the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB!');
db.users.insert( { item: "card", qty: 15 } )


// You can add additional code here for testing or other operations
// Make sure to close the connection when you're done
mongoose.connection.close();
});