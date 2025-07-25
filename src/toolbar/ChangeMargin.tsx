import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

function improveMargin(): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.lineHeight = (parseFloat(style.lineHeight) / 16) + (0.4) + "em";
    }
}

function diminishMargin(): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.lineHeight = (parseFloat(style.lineHeight) / 16) - (0.4) + "em";
    }
}

export default function ChangeMargin(): ReactElement {

    const { t } = useTranslation();

    return <div id="elements">
        <p id="interlignes">{t("margin")}</p>
        <section id="boutons">
            <button aria-label="Diminuer la marge" onClick={diminishMargin}>-</button>
            <button aria-label="Augmenter la marge" onClick={improveMargin}>+</button>
        </section>
    </div>
}