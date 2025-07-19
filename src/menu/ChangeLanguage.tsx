import React, { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from '../i18n';

export default function ChangeLanguage(): ReactElement {

	const { i18n } = useTranslation();
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

	return <button id="languageButton" onClick={change}>{i18next.t("lang")}</button>
}