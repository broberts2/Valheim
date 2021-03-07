const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());

app.use(cors());

app.post(`/webhook`, async (req, res) => {
	const result = await Oracle.OATH2(req);
	res.redirect(result);
}),
	(server = require("http").createServer(app));
server.listen(config.port, () =>
	console.log(
		`--------------------------------------------------------------` +
			`\n\t\tListening on port 2459\n` +
			`--------------------------------------------------------------`
	)
);
