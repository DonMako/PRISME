import React, { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage(): ReactElement {

	const { i18n, t } = useTranslation();
	const [fr, setFr] = useState(true);

	function changeLanguage(lng: string): void {
		i18n.changeLanguage(lng);
	};

	function change(): void {
		if (fr) {
			changeLanguage("en");
			setFr(false);
		} else {
			changeLanguage("fr");
			setFr(true);
		}
	}

	return <button id="languageButton" onClick={change}>{t("lang")}</button>
}