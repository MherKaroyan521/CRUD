const express = require('express');
const bodyParser = require("body-parser");
var path = require("path");
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://mherkaroyan:M2h0e0r9^@cluster0.crtiwy0.mongodb.net/User_product';




const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', function(req,res){
    mongoose.connect(connectionString, { useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));

    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {

            let result = await mongoose.connection.db.collection('products').find().toArray()
            res.render('../public/forma.ejs', {
                res: result
            });
            console.log(result)



        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }

        // You can add additional code here for testing or other operations
        // Make sure to close the connection when you're done
        mongoose.connection.close();
    });
    var tagline = "Sans Bad Time";


});


app.get('/update/id', function(req,res){
    let id = req.body._id;
    mongoose.connect(connectionString, { useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));

    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {

            let result = await mongoose.connection.db.collection('products').find({_id: id}).toArray()
            res.render('../public/forma.ejs', {
                res: result
            });
            console.log(result)



        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }

        // You can add additional code here for testing or other operations
        // Make sure to close the connection when you're done
        mongoose.connection.close();
    });
    var tagline = "Sans Bad Time";


});

app.post('/submit', async function(req,res){
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let age = req.body.age;
    let password = req.body.password;

    mongoose.connect(connectionString, { useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));

    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {

            let result = await mongoose.connection.db.collection('products').insertOne({
                firstname: firstname,
                lastname: lastname,
                email: email,
                age: age,
                password: password
            })

        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }

        // You can add additional code here for testing or other operations
        // Make sure to close the connection when you're done
        mongoose.connection.close();
    });


    res.redirect("/")
});



app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});



// Replace the connection string with your MongoDB connection string
