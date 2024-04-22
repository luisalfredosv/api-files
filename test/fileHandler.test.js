import { expect } from "chai";
import { fetchFiles, fetchFile } from "../src/fileHandler.js";

describe("Funciones de manejo de archivos", () => {
	it("Debería recuperar los archivos correctamente", async () => {
		const files = await fetchFiles();
		expect(files).to.be.an("array");
		expect(files).to.have.lengthOf.at.least(1);
	});

	it("Debería recuperar un archivo con éxito", async () => {
		const fileName = "test2.csv";
		const fileData = await fetchFile(fileName);
		expect(fileData).to.be.a("string");
	});
});
