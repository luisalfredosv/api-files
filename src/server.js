import express from "express";
import cors from "cors";

import fileRouter from "./fileRouter.js";

const app = express();
const port = 3002;

app.use(cors());

app.get("/health", (req, res) => {
	res.status(200).send("OK");
});

app.use("/files/data", fileRouter);

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

export default app;
