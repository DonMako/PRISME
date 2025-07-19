import React, { ReactElement } from "react";
import i18next from "../i18n/i18n";

function changeColor(): void {
    document.getElementById("myPdf")!.style.backgroundColor = (document.getElementById("back") as HTMLInputElement).value;
}

export default function ChangeBack(): ReactElement {

    return <form>
        <label id="colorBack" htmlFor="back">{i18next.t("colorBack")}</label>
        <select onChange={changeColor} id="back">
            <option value="white">Blanc</option>
            <option value="black">Noir</option>
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="yellow">Jaune</option>
            <option value="green">Vert</option>
        </select></form>
}