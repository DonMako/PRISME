import React, { ReactElement } from "react";
import i18next from "../i18n/i18n";

function changeColor(): void {
    document.getElementById("myPdf")!.style.color = (document.getElementById("front") as HTMLInputElement).value;
};

export default function ChangeFront(): ReactElement {

    return <form>
        <label id="colorFront" htmlFor="front">{i18next.t("colorFront")}</label>
        <select onChange={changeColor} id="front">
            <option value="black">Noir</option>
            <option value="white">Blanc</option>
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="yellow">Jaune</option>
            <option value="green">Vert</option>
        </select></form>
}