import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Header() {
	const { t } = useTranslation();

	const languages = [
		{
			code: "en",
			name: "English",
		},
		{
			code: "fr",
			name: "Français",
		},
		{
			code: "pt",
			name: "Português",
		},
	];

	return (
		<header>
			<nav>
				<li>{t("search_header")}</li>
				<li>{t("themes_header")}</li>
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
