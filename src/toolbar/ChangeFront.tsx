import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

function changeColor(): void {
    document.getElementById("myPdf")!.style.color = (document.getElementById("front") as HTMLInputElement).value;
};

export default function ChangeFront(): ReactElement {

    const { t } = useTranslation();
    
    return <form>
        <label id="colorFront" htmlFor="front">{t("colorFront")}</label>
        <select onChange={changeColor} id="front">
            <option value="black">Noir</option>
            <option value="white">Blanc</option>
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="yellow">Jaune</option>
            <option value="green">Vert</option>
        </select></form>
}