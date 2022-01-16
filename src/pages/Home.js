import React from "react";
import Header from "../components/Header";
import Slides from "../components/Slides";
import "./css/Home.css";

function App() {
	return (
		<div className="container">
			<Header />
			<Slides />
		</div>
	);
}

export default App;
