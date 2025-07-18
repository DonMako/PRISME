import React, { ReactElement } from "react";

const changeColor = function (): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        element.style.color = (document.getElementById("front") as HTMLInputElement).value;
    }
};

const ChangeFront = function (): ReactElement {
    return <form>
        <label id="colorFront" htmlFor="front">Changer la couleur du texte</label>
        <select onChange={changeColor} id="front">
            <option value="black">Noir</option>
            <option value="white">Blanc</option>
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="yellow">Jaune</option>
            <option value="green">Vert</option>
        </select></form>
}

export default ChangeFront;