import React, { ReactElement } from 'react';

const improveSize = function (): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.fontSize = (parseFloat(style.fontSize) / 16) + (0.4) + "em";
    }
}

const diminishSize = function (): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.fontSize = (parseFloat(style.fontSize) / 16) - (0.4) + "em";
    }
}

const ChangeSize = function (): ReactElement {
    return <div id="boutonsTaille">
        <p id="changeTaille">Changer la taille du texte</p>
        <button aria-label="Diminuer la taille du texte" onClick={diminishSize}>-</button>
        <button aria-label="Augmenter la taille du texte" onClick={improveSize}>+</button>
    </div>
}

export default ChangeSize;