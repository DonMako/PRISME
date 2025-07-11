import React, { ReactElement } from 'react';

const changeToOpenDyslexic = function (): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        element.style.fontFamily = "OpenDyslexic";
    }
}

const changeToSerif = function (): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        element.style.fontFamily = "serif";
    }
}

const changeToMonospace = function (): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        element.style.fontFamily = "monospace";
    }
}

const changeToCursive = function (): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        element.style.fontFamily = "cursive";
    }
}

const ChangePolice = function (): ReactElement {
    return <div id="boutonsPolice">
        <button id="boutonOpenDys" aria-label="Mettre la police Serif" onClick={changeToOpenDyslexic}>A</button>
        <button id="boutonSerif" aria-label="Mettre la police Serif" onClick={changeToSerif}>A</button>
        <button id="boutonMonospace" aria-label="Mettre la police Monospace" onClick={changeToMonospace}>A</button>
        <button id="boutonCursive" aria-label="Mettre la police Cursive" onClick={changeToCursive}>A</button>
    </div>
}

export default ChangePolice;