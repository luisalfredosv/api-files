import { expect } from "chai";
import { describe, it } from "mocha";
import http from "http";

describe("Server", () => {
	it("Debería iniciar el servidor correctamente", (done) => {
		const port = 3002;

		const req = http.get(`http://localhost:${port}/health`, (res) => {
			expect(res.statusCode).to.equal(200);
			done();
		});

		req.on("error", (err) => {
			done(err);
		});
	});
});
