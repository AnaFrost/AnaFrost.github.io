export async function getProductData() {
	try {
		const response = await fetch('https://store.tildacdn.com/api/tgetproduct/');

		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}
