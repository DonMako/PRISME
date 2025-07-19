import React, { ReactElement } from "react";
import { useTranslation } from 'react-i18next';

function changeColor(): void {
    document.getElementById("myPdf")!.style.backgroundColor = (document.getElementById("back") as HTMLInputElement).value;
}

export default function ChangeBack(): ReactElement {

    const { t } = useTranslation();

    return <form>
        <label id="colorBack" htmlFor="back">{t("colorBack")}</label>
        <select onChange={changeColor} id="back">
            <option value="white">Blanc</option>
            <option value="black">Noir</option>
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="yellow">Jaune</option>
            <option value="green">Vert</option>
        </select></form>
}