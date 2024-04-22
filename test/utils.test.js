import { expect } from "chai";
import { parseCSV, formatData } from "../src/utils.js";

describe("Utils", () => {
	it("Debería parsear el CSV correctamente", () => {
		const csvText = "text,number,hex\napple,5,#FF0000\nbanana,10,#FFFF00";
		const expectedResult = [
			{ text: "apple", number: "5", hex: "#FF0000" },
			{ text: "banana", number: "10", hex: "#FFFF00" },
		];
		expect(parseCSV(csvText)).to.deep.equal(expectedResult);
	});

	it("Debería formatear los datos correctamente", () => {
		const inputData = [
			{ text: "apple", number: "5", hex: "#FF0000" },
			{ text: "banana", number: "10", hex: "#FFFF00" },
		];
		const expectedResult = [
			{ text: "apple", number: 5, hex: "#FF0000" },
			{ text: "banana", number: 10, hex: "#FFFF00" },
		];
		expect(formatData(inputData)).to.deep.equal(expectedResult);
	});

	it("Debería omitir los elementos con propiedades faltantes", () => {
		const inputData = [
			{ text: "apple", number: "5", hex: "#FF0000" },
			{ text: "banana", number: "10" }, // Falta la propiedad 'hex'
			{ text: "orange", hex: "#FFA500" }, // Falta la propiedad 'number'
			{ number: "3", hex: "#008000" }, // Falta la propiedad 'text'
			{ text: "grape" }, // Faltan todas las propiedades requeridas
		];
		const expectedResult = [{ text: "apple", number: 5, hex: "#FF0000" }];
		expect(formatData(inputData)).to.deep.equal(expectedResult);
	});
});
