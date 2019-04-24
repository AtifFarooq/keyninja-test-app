const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Defining the name of the MongoDB
mongoose.connect('mongodb://localhost/customerdb');
let db = mongoose.connection;

// Check connection
db.once('open', () => {
    console.log("Connected to MongoDB");
});

// Check for db errors
db.on('error', (err) => {
    console.log(err);
});

// Init application
const app = express();

// Bring in the Model
let Customer = require('./models/customer');

/* Load 'Pug' as a Templating/View engine
   All templates are contaned in the 'views' directory */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {

    // Find all the customers currently in the db
    Customer.find({}, (err, customers) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {
                title: 'Customers',
                customers: customers
            });
        }
    });

});


// GET details about a single customer
app.get('/customer/:id', (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        res.render('customer', {
            customer: customer
        });
    });
}); 


// Load the 'Edit Customer Details' Form
app.get('/customer/edit/:id', (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        res.render('edit_customer', {
            title: "Edit Customer Details",
            customer: customer
        });
    });
});


// The 'Add Customer' GET Route (when we press the button on the NavBar)
app.get('/customers/add', (req, res) => {
    res.render('add_customer', {
        title: 'Add Customer'
    });
});

// The 'Add Customer' POST route (when a new Customer's details are added)
app.post('/customers/add', (req, res) => {
    let customer = new Customer();
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.email = req.body.email;
    
    customer.save((err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });
});


// Edit Customer Details POST route
app.post('/customer/edit/:id', (req, res) => {
    let customer = {};
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.email = req.body.email;
    
    let query = {_id: req.params.id};
    Customer.update(query, customer, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });  
});

// DELETE route 
// Note: This isn't an optimal way to delete. Making an AJAX call is better.
app.get('/customer/delete/:id', (req, res) => {
    let query = { _id: req.params.id };
    Customer.remove(query, (err) => {
        if (err) {
            console.log(err);
        }
    })
    res.redirect('/');
    
});

// Listen on this port
const port = 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});