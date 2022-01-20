import React from "react";

function SearchCard({ image, title, artist }) {
	return (
		<div className="search-card">
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<h3>{artist}</h3>
		</div>
	);
}

export default SearchCard;
