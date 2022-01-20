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
	"https://api.smk.dk/api/v1/art/search/?keys=*&offset=0&rows=200&filters=[has_image:true],[object_names:painting]&lang=en";

export default fetchArtwork;
