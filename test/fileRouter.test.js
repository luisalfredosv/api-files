import { expect } from "chai";
import { describe, it } from "mocha";
import request from "request";

describe("Endpoint /files/data", () => {
	it("Debería devolver una lista de archivos", (done) => {
		request("http://localhost:3002/files/data", (error, response, body) => {
			if (error) {
				done(error);
			} else {
				expect(response.statusCode).to.equal(200);
				const responseData = JSON.parse(body);
				expect(responseData).to.be.an("array");
				done();
			}
		});
	});

	it("Debería devolver un archivo específico si se especifica un nombre de archivo", (done) => {
		request(
			"http://localhost:3002/files/data?fileName=test2.csv",
			(error, response, body) => {
				if (error) {
					done(error);
				} else {
					expect(response.statusCode).to.equal(200);
					const responseData = JSON.parse(body);
					expect(responseData).to.be.an("object");
					expect(responseData.file).to.equal("test2.csv");
					done();
				}
			}
		);
	});

	it("Debería devolver un error controlado al indicarle que devuelva un nombre de archivo que no existe", (done) => {
		request(
			"http://localhost:3002/files/data?fileName=test222.csv",
			(error, response, body) => {
				if (error) {
					done(error);
				} else {
					expect(response.statusCode).to.equal(404);
					done();
				}
			}
		);
	});
});
