import React, { ReactElement } from "react";
import i18next from "../i18n/i18n";

function improveSize(): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.fontSize = (parseFloat(style.fontSize) / 16) + (0.4) + "em";
    }
}

function diminishSize(): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.fontSize = (parseFloat(style.fontSize) / 16) - (0.4) + "em";
    }
}

export default function ChangeSize(): ReactElement {

    return <div id="elements">
        <p id="changeTaille">{i18next.t("size")}</p>
        <section id="boutons">
            <button aria-label="Diminuer la taille du texte" onClick={diminishSize}>-</button>
            <button aria-label="Augmenter la taille du texte" onClick={improveSize}>+</button>
        </section>
    </div>
}