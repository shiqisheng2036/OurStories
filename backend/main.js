const express = require("express");

const app = express();

// Serves frontend statically
app.use(express.static("frontend"));

// A dictionary of room id to the list of words
const roomIdToWords = {};
roomIdToWords[-1] = ["Welcome", "to", "Tokyo", "Disney", "Sea"]; //TODO: delete this line once we get everything working

// When roomData is fetched, return a list of words for that room
app.get("/api/roomData", (req, res) => {
	const roomId = req.query.roomId;
	if (!(roomId in roomIdToWords)) {
		res.send("TODO: the room id was not found")
	}
	res.json(roomIdToWords[roomId])
});

// Allow users to post words to a room
// TODO: only allow one word at a time
app.post("/api/roomData", (req, res) => {
	const word = req.query.word;
	const roomId = req.query.roomId;
	if (!(roomId in roomIdToWords)) {
		res.send("TODO: the room id was not found")
	}
	roomIdToWords[roomId].push(word);
	res.send(true);
});

app.listen(3000);
console.log(`http://127.0.0.1:3000`);
