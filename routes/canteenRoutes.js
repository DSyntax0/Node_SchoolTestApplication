const express = require("express");
const router = express.Router();

const Canteen = require("./../Models/Canteen");

router.get("/", async (req, res) => {
	try {
		const dataReq = await Canteen.find();
		console.log("data fetch");
		res.status(200).json(dataReq);
	} catch (err) {
		console.log(err);
		res.status(500).json({ err: "Internal sever error" });
	}
});

router.post("/", async (req, res) => {
	try {
		const canteenData = req.body;
		// //create new Canteen doc using mongoose model
		const CanteenItems = new Canteen(canteenData);

		// //save the CanteenItems data to database
		const savedCanteenItems = await CanteenItems.save();
		console.log("data saved");
		res.status(200).json(savedCanteenItems);
	} catch (err) {
		console.log(err);
		res.status(500).json({ err: "Internal sever error" });
	}
});

router.get("/:taste", async (req, res) => {
	try {
		const tasteChoice = req.params.taste;
		if (
			tasteChoice == "sweet" ||
			tasteChoice == "spicy" ||
			tasteChoice == "sour"
		) {
			const tasteRes = await Canteen.find({ taste: tasteChoice });
			console.log("taste fetched");
			res.status(200).json(tasteRes);
		} else {
			res.status(400).json({ error: "Invalid taste type" });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: "Internal server error" });
	}
});

// comment added for testing purpose [github learning]
module.exports = router;
