// foo.js
// const fs = require("fs");
export function read_file(file) {
	// return "WORKING";
	console.log(file);
	fetch(file)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
			}
			console.log(response.json());
			return response.json();
		})
		//   .then((json) => initialize(json))
		.catch((err) => console.log(`Fetch problem: ${err.message}`));
}