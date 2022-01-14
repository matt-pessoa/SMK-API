import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./css/Header.css";

function Header() {
	const { t } = useTranslation();

	const languages = [
		{
			code: "en",
			name: "EN",
		},
		{
			code: "fr",
			name: "FR",
		},
		{
			code: "pt",
			name: "PT",
		},
	];

	return (
		<header>
			<nav>
				<Link to="/">
					<li>{t("search_header")}</li>
				</Link>
				<Link to="/themes">
					<li>{t("themes_header")}</li>
				</Link>
				<li>{t("my_list_header")}</li>
				<li>{t("about_project_header")}</li>
				<select>
					{languages.map(({ code, name }) => (
						<option onClick={() => i18next.changeLanguage(code)}>{name}</option>
					))}
				</select>
			</nav>
		</header>
	);
}

export default Header;
