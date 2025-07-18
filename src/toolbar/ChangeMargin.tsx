import React, { ReactElement } from "react";

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
    return <div id="elements">
        <p id="interlignes">Changer l'interlignage</p>
        <section id="boutons">
            <button aria-label="Diminuer la marge" onClick={diminishMargin}>-</button>
            <button aria-label="Augmenter la marge" onClick={improveMargin}>+</button>
        </section>
    </div>
}