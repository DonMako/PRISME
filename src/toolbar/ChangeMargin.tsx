import React, { ReactElement } from 'react';

const improveMargin = function (): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.lineHeight = (parseFloat(style.lineHeight) / 16) + (0.4) + "em";
    }
}

const diminishMargin = function (): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.lineHeight = (parseFloat(style.lineHeight) / 16) - (0.4) + "em";
    }
}

const ChangeMargin = function (): ReactElement {
    return <div id="boutonsMarges">
        <p id="interlignes">Changer l'interlignage</p>
        <button aria-label="Diminuer la marge" onClick={diminishMargin}>-</button>
        <button aria-label="Augmenter la marge" onClick={improveMargin}>+</button>
    </div>
}

export default ChangeMargin;