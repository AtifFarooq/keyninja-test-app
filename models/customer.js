/* This file defines the 'Customer' model and uses Mongoose to map
 * the relevant fields to the MongoDB Schema. Each 'Customer' will
   have a firstName, a lastName, and an e-mail address. 
   Assumption: All these fields are required, and must be Strings.
 */

const mongoose = require('mongoose');

// Customer Schema
let customerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    }
});

// First argument is the name of the model, and the second is the Schema
let Customer = module.exports = mongoose.model('Customer', customerSchema);