import { Router } from "express";
import { getFileController, getFilesController } from "./filesController.js";

const fileRouter = Router();

fileRouter.get("/", async (req, res) => {
	try {
		const fileName = req.query.fileName;
		if (!fileName) {
			const fileResponses = await getFilesController();
			res.json(fileResponses);
		} else {
			const fileResponse = await getFileController(fileName);

			if (!fileResponse) res.status(404).json({});
			res.json(fileResponse);
		}
	} catch (error) {
		console.error("Error al realizar las solicitudes:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

export default fileRouter;
