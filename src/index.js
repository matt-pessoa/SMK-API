import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";

import Home from "./pages/Home";
import Themes from "./pages/Themes";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/themes" element={<Themes />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
