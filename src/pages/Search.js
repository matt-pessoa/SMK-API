import React, { useState, useEffect } from "react";
import SearchCard from "../components/SearchCard";
import fetchArtwork from "../services/endpoints";
import { showcaseImages } from "../services/endpoints";
import "./css/Search.css";

function Search() {
	const [artworks, setArtworks] = useState([]);
	const [searchbar, setSearchbar] = useState("");

	useEffect(() => {
		async function fetchData() {
			const data = await fetchArtwork(showcaseImages);
			setArtworks(data);
		}
		fetchData();
	}, []);

	function handleChange(event) {
		const { value } = event.target;
		setSearchbar(value);
	}

	return (
		<section className="search-response">
			<input
				type="text"
				name="searchbar"
				value={searchbar}
				onChange={(event) => handleChange(event)}
			/>
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
