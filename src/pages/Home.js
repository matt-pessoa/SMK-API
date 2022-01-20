import React from "react";
import Header from "../components/Header";
// import Slides from "../components/Slides";
import Search from "../pages/Search";
import "./css/Home.css";

function App() {
	return (
		<div className="container">
			<Header />
			{/* <Slides /> */}
			<Search />
		</div>
	);
}

export default App;
