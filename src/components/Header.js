import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
	const { t } = useTranslation();

	return (
		<header>
			<nav>
				<li>{t("search_header")}</li>
			</nav>
		</header>
	);
}

export default Header;
