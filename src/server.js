// server.js
import express from "express";
import cors from "cors";
import { fetchFiles, fetchFile } from "./fileHandler.js";
import { parseCSV, formatData } from "./utils.js";

const app = express();
const port = 3002;

app.use(cors());

app.get("/files/data", async (req, res) => {
	try {
		const fileNames = await fetchFiles();
		const fileResponses = await Promise.all(
			fileNames.map(async (fileName) => {
				try {
					const fileData = await fetchFile(fileName);
					const parsedData = parseCSV(fileData);
					const formattedData = formatData(parsedData);
					return {
						file: fileName,
						lines: formattedData,
					};
				} catch (error) {
					console.error(
						`Error en la solicitud para el archivo: ${fileName}`
					);
					return { [fileName]: null };
				}
			})
		);
		res.json(fileResponses);
	} catch (error) {
		console.error("Error al realizar las solicitudes:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
