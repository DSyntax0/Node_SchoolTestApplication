const express = require("express");
// Isse aap apne application ke routes ko alag-alag modules mein organize kar sakte hain
const router = express.Router();

//import from models/Person Schema structure fetch
// const Person = require("./../Models/Person");
const Person = require("./../Models/Person");

router.post("/", async (req, res) => {
	try {
		//assume that req body contain person data
		const personData = req.body;
		// //create new person doc using mongoose model
		const newPerson = new Person(personData);
		// //save the newPerson data to database
		const savedPerson = await newPerson.save();
		console.log("data saved");
		res.status(200).json(savedPerson);
	} catch (err) {
		console.log(err);
		res.status(500).json({ err: "Internal sever error" });
	}
});

router.get("/", async (req, res) => {
	try {
		const dataReq = await Person.find();
		console.log("data fetch");
		res.status(200).json(dataReq);
	} catch (err) {
		console.log(err);
		res.status(500).json({ err: "Internal sever error" });
	}
});

// this is a parameterized API endpoint calls --> Dynamically set at api
// /person/workType
router.get("/:workType", async (req, res) => {
	try {
		//extract the work type from the url parameter
		const workType = req.params.workType;
		if (
			workType == "Student" ||
			workType == "Teacher" ||
			workType == "Parent" ||
			workType == "Principal"
		) {
			//this [work:] is in Person schema structure name
			const response = await Person.find({ work : workType });
			console.log("response fetched");
			res.status(200).json(response);
		} else {
			res.status(400).json({ error: "Invalid work type" });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: "Internal server error" });
	}
});

//Update to the document through API
router.put("/:id", async (req, res) => {
	try {
		//extract the id from the url parameter
		const person_Id = req.params.id; // obj Id
		console.log(person_Id, " Person_Id ");
		// updatePersonData will only contain the data which id person will pass
		const updatePersonData = req.body;
		console.log(updatePersonData, " this is UpdatePerson data");
		const response = await Person.findByIdAndUpdate(
			person_Id,
			updatePersonData,
			{
				new: true, // return the update documents
				runValidators: true, // run mongoose validation which is in the schema
			}
		);
		// if response is null
		if (!response) {
			return res.status(400).json({ error: "Person not found" });
		}
		console.log(response, " response data updates ");
		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({ err: "Invalid server error" });
	}
});



//Delete
router.delete('/:id', async(req,res) => {
	try{
		const personId = req.params.id; // extract the personId from url parameter

		// Assume u have person data 
		const responsePerson = await Person.findByIdAndDelete(personId);
		// if response is null
		if (!responsePerson) {
			return res.status(400).json({ error: "Person not found" });
		}
		console.log(responsePerson, " responsePerson data removed ");
		res.status(200).json({message : 'responsePerson deleted successfully'});
	}catch(err){
		res.status(500).json({ err: "Invalid server error" });
	}
});


module.exports = router;
