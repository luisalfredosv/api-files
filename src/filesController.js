import { fetchFile, fetchFiles } from "./fileHandler.js";
import { formatData, parseCSV } from "./utils.js";

export const getFilesController = async () => {
	const fileNames = await fetchFiles();
	const files = await Promise.all(
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
				console.warn(
					`Error en la solicitud para el archivo: ${fileName}`
				);
				return { file: fileName, lines: [] };
			}
		})
	);

	const fileResponses = files.filter((el) => el.lines.length > 0);

	return fileResponses;
};

export const getFileController = async (fileName) => {
	try {
		const fileData = await fetchFile(fileName);
		const parsedData = parseCSV(fileData);
		const formattedData = formatData(parsedData);
		return {
			file: fileName,
			lines: formattedData,
		};
	} catch (error) {
		console.warn(`Error en la solicitud para el archivo: ${fileName}`);
	}
};
