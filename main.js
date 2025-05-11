// server creating via express ---> It is the place of the SERVER Start main 
const express = require("express");
const app = express();
const db = require("./db");
const PORT = 1002;

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // this will store all my data into req.body

//this will work as Menu card(API)
app.get("/", (req, res) => {
	res.send(" Welcome to the School Canteen ");
});

//Import the Router files
const personRouters = require("./routes/personRoutes");
const CanteenRouters = require("./routes/canteenRoutes");
//use the routers
app.use("/person", personRouters);
app.use("/canteen", CanteenRouters);

app.listen(PORT, () => {
	console.log(`Server is running on the PORT at ${PORT}`);
});

// Server in Node js
//JSON use
// app.get("/home", (req, res) => {
// 	res.send("This is the Home page u have to mange it.. ");
// });

// app.get("/kitchen", (req, res) => {
// 	res.send("This is the Kitchen room u have to manage it.. ");
// });

// app.get("/guest", (req, res) => {
// 	let people = {
// 		name: "Jigar",
// 		age: 14,
// 		isStudent: true,
// 		id: 23,
// 	};
// 	res.send(people);
// });

// app.post("/guests", (req, res) => {
// 	console.log();
// });

// app.post("/drinks", (req, res) => {
// 	res.send("data is getting in the DataBase store");
// });
// const { request } = require("express");

//OBJECT TO JSON CONVERT
// const object1ToConvert = {
//     name: "Ravi",
//     age: 23,
//     isStudent: false,
//     rollNo: 101
// };

// const jsonObj = JSON.stringify(object1ToConvert);
// console.log("This is the Converted change : ",jsonObj);

// //convert into the Json to Object

// const json1ToConvert = '{"name":"Ravi","age":23,"isStudent":false,"rollNo":101}';
// const object1Change = JSON.parse(json1ToConvert);
// console.log("This is the Object: ", object1Change);

// console.log(typeof object1Change);
// console.log(typeof jsonObj);
