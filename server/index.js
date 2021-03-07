const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(bodyParser.json());

app.use(cors());

app.post(`/webhook`, async (req, res) => {
	res.json("Success!");
}),
	(server = require("http").createServer(app));
server.listen(config.port, () =>
	console.log(
		`--------------------------------------------------------------` +
			`\n\t\tListening on port 2459\n` +
			`--------------------------------------------------------------`
	)
);
