const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { exec } = require("child_process");
app.use(bodyParser.json());

app.use(cors());

app.post(`/webhook`, async (req, res) => {
	exec("git pull origin master", (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
	exec(
		`cd "C:\Program Files (x86)\Steam\steamapps\common\TES Server - Modded" & "TES Server - Modded.bat"`,
		(error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
		}
	);
	res.json("Success!");
}),
	(server = require("http").createServer(app));
server.listen(2459, () =>
	console.log(
		`--------------------------------------------------------------` +
			`\n\t\tListening on port 2459\n` +
			`--------------------------------------------------------------`
	)
);
