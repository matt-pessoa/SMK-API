import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Themes from "./pages/Themes";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/search" element={<Search />} />
			<Route path="/themes" element={<Themes />} />
			<Route path="/favorites" element={<Favorites />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
