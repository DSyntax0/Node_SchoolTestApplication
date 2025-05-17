// Here this is responsible for database connection with nodejs
const mongoose = require("mongoose");
require('dotenv').config();
// Define the mongoDB URL
// const mongo_URL = "mongodb://localhost:27017/schoolDB";
//local url from env file
// const mongo_URL = process.env.MongoDB_URL_Local

//online DB server
const mongo_URL = process.env.mongo_URL_DB;

//set up mongodb connection
mongoose.connect(mongo_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

//get the default connection
// mongoose maintain the default connection
const db = mongoose.connection;

db.on("connected", () => {
	console.log("Connected to MongoDB server");
});

db.error("error", (err) => {
	console.log("MongoDB connected error", err);
});

db.on("disconnected", ()=>{
	console.log("MongoDB disconnected");
});


//Export the database connection to server side
module.exports = db;