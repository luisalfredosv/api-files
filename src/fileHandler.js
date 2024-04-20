import https from "https";

const baseUrl = "https://echo-serv.tbxnet.com";

export const fetchFiles = async () => {
	return new Promise((resolve, reject) => {
		const options = {
			hostname: "echo-serv.tbxnet.com",
			url: baseUrl,
			path: "/v1/secret/files",
			method: "GET",
			headers: {
				Authorization: "Bearer aSuperSecretKey",
			},
		};

		const req = https.request(options, (res) => {
			let data = "";

			res.on("data", (chunk) => {
				data += chunk;
			});

			res.on("end", () => {
				if (res.statusCode === 200) {
					const files = JSON.parse(data).files;
					resolve(files);
				} else {
					reject(
						new Error(
							`Failed to fetch files. Status code: ${res.statusCode}`
						)
					);
				}
			});
		});

		req.on("error", (error) => {
			console.error("Error al realizar la solicitud:", error);
			reject(error);
		});

		req.end();
	});
};

export const fetchFile = async (fileName) => {
	return new Promise((resolve, reject) => {
		const options = {
			hostname: "echo-serv.tbxnet.com",
			url: baseUrl,
			path: `/v1/secret/file/${fileName}`,
			method: "GET",
			headers: {
				Authorization: "Bearer aSuperSecretKey",
			},
		};

		const req = https.request(options, (res) => {
			let data = "";

			res.on("data", (chunk) => {
				data += chunk;
			});

			res.on("end", () => {
				if (res.statusCode === 200) {
					resolve(data); // Devuelve los datos sin analizar como JSON
				} else {
					reject(
						new Error(
							`Failed to fetch file ${fileName}. Status code: ${res.statusCode}`
						)
					);
				}
			});
		});

		req.on("error", (error) => {
			console.error(
				`Error al realizar la solicitud para el archivo ${fileName}:`,
				error
			);
			reject(error);
		});

		req.end();
	});
};
