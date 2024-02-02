const express = require('express');
const bodyParser = require("body-parser");
var path = require("path");
const app = express();
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
const connectionString = 'mongodb+srv://mherkaroyan:M2h0e0r9^@cluster0.crtiwy0.mongodb.net/User_product';




const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/value/:id', function(req,res){
    let id = req.params.id;
    console.log(id)
})

app.get('/', async function(req,res){
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
});


app.get('/update/:id', async function(req,res){
    let id = new ObjectId(req.params.id);
    console.log(typeof id, 1111111111111111)


    mongoose.connect(connectionString, { useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));

    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {

            let result = await mongoose.connection.db.collection('products').find({"_id": id}).toArray()
            console.log(result)
            res.render('../public/update.ejs', {
                upd: result
            });



        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }

        // You can add additional code here for testing or other operations
        // Make sure to close the connection when you're done
        mongoose.connection.close();
    });


});

app.post('/update', async function(req,res){
    console.log(1234567890)
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let age = req.body.age;
    let password = req.body.password;
    let id = req.body.id;
    console.log(typeof id, typeof new ObjectId(id),9999999999)
    mongoose.connect(connectionString, { useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));

    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {
            let result = await mongoose.connection.db.collection('products').updateOne({_id: id}, {firstname:firstname,lastname:lastname,email:email,age:age,password:password})
            res.redirect("/")

        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }

        // You can add additional code here for testing or other operations
        // Make sure to close the connection when you're done
        mongoose.connection.close();
    });


});

app.get('/delete/:id', async function(req,res){
    let id = new ObjectId(req.params.id);
    console.log(typeof id, 1111111111111111)


    mongoose.connect(connectionString, { useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));

    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {

            let result = await mongoose.connection.db.collection('products').deleteOne({"_id": id})
            console.log(result)
            res.redirect("/");



        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }

        // You can add additional code here for testing or other operations
        // Make sure to close the connection when you're done
        mongoose.connection.close();
    });
})

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
