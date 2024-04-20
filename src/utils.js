export const parseCSV = (csvText) => {
	const lines = csvText.split("\n");
	const headers = lines[0].split(",");
	const result = [];

	for (let i = 1; i < lines.length; i++) {
		const currentLine = lines[i].split(",");
		const obj = {};
		for (let j = 0; j < headers.length; j++) {
			obj[headers[j]] = currentLine[j] || null;
		}
		result.push(obj);
	}

	return result;
};

export const formatData = (data) => {
	return data.map((item) => ({
		text: item.text,
		number: parseInt(item.number),
		hex: item.hex || null,
	}));
};
