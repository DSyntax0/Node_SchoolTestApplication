// Here this is connected to the server to MongoDB server
const mongoose = require('mongoose');

//Define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    work: {
        type: String,
        enum: ['Student','Teacher','Principal','Parent'],
        required : true
    },
    mobile : {
        type: String,
        required: true
    },
    email : {
        type : String,
        required: true,
        unique : true
    },
    address:{
        type: String,
    },
    fees : {
        type: Number,
        required : true
    }
});

// Create person models
const Person = mongoose.model('Person',personSchema);
module.exports = Person;
