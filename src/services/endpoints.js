function fetchArtwork(url) {
	try {
		const items = fetch(url)
			.then((response) => response.json())
			.then((json) => {
				return json.items;
			});
		return items;
	} catch (error) {
		console.log(error);
	}
}

export const showcaseImages =
	"https://api.smk.dk/api/v1/art/search/?keys=*&offset=0&rows=500&filters=[has_image:true],[object_names:painting]&lang=en";

export const inputSearch = (string) =>
	`https://api.smk.dk/api/v1/art/search?keys=${string}&qfields=titles&facetNum=-1&offset=0&rows=100&filters=[has_image:true]&lang=en`;

export default fetchArtwork;
