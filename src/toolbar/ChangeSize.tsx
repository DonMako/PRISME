import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation();

    return <div id="elements">
        <p id="changeTaille">{t("size")}</p>
        <section id="boutons">
            <button aria-label="Diminuer la taille du texte" onClick={diminishSize}>-</button>
            <button aria-label="Augmenter la taille du texte" onClick={improveSize}>+</button>
        </section>
    </div>
}