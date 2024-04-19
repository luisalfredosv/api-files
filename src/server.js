import express from "express";
import cors from "cors";

const app = express();
const port = 3002;

app.use(cors());

app.get("/", (req, res) => {
	return res.json({
		msg: "Hi",
	});
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

export default app;
