import React, { useState, useEffect } from "react";
import SearchCard from "../components/SearchCard";
import fetchArtwork from "../services/endpoints";
import { showcaseImages } from "../services/endpoints";

function Search() {
	const [artworks, setArtworks] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await fetchArtwork(showcaseImages);
			setArtworks(data);
		}
		fetchData();
	}, []);

	return (
		<section className="search-response">
			{artworks
				.sort(() => Math.random() - 0.5)
				.slice(0, 30)
				.map((artwork) => (
					<SearchCard
						image={artwork.image_thumbnail}
						title={artwork.titles[0].title}
						artist={artwork.artist[0]}
					/>
				))}
		</section>
	);
}

export default Search;
