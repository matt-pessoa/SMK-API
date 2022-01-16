import React, { useState } from "react";
import sliderImages from "../images/images"; // length: 24
import "./css/Slides.css";

function Slides() {
	const [imageIndex, setImageIndex] = useState(0);
	const [currentImage, setCurrentImage] = useState(sliderImages[imageIndex]);

	setTimeout(() => {
		if (imageIndex === sliderImages.length) {
			setImageIndex(0);
			setCurrentImage(sliderImages[0]);
		} else {
			setImageIndex(imageIndex + 1);
			setCurrentImage(sliderImages[imageIndex]);
		}
	}, 8000);
	return (
		<section className="slides">
			<img className="fade-out" src={currentImage} />
		</section>
	);
}

export default Slides;
