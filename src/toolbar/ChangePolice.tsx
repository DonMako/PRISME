import React, { ReactElement } from "react";

function changeToOpenDyslexic(): void {
    const element = document.getElementById("myPdf")!.style.fontFamily = "OpenDyslexic";
}

function changeToSerif(): void {
    const element = document.getElementById("myPdf")!.style.fontFamily = "serif";
}

function changeToMonospace(): void {
    const element = document.getElementById("myPdf")!.style.fontFamily = "monospace";
}

function changeToCursive(): void {
    const element = document.getElementById("myPdf")!.style.fontFamily = "cursive";
}

export default function ChangePolice(): ReactElement {
    return <div id="elements">
        <p id="interlignes">Changer la police</p>
        <section id="boutons">
            <button id="boutonOpenDys" aria-label="Mettre la police Serif" onClick={changeToOpenDyslexic}>A</button>
            <button id="boutonSerif" aria-label="Mettre la police Serif" onClick={changeToSerif}>A</button>
            <button id="boutonMonospace" aria-label="Mettre la police Monospace" onClick={changeToMonospace}>A</button>
            <button id="boutonCursive" aria-label="Mettre la police Cursive" onClick={changeToCursive}>A</button>
        </section>
    </div>
}