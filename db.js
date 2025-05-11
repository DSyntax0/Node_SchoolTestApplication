// Here this is responsible for database connection with nodejs
const mongoose = require("mongoose");

// Define the mongoDB URL
const mongoURL = "mongodb://localhost:27017/schoolDB";

//set up mongodb connection
mongoose.connect(mongoURL, {
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