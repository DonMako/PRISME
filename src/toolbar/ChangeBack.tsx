import React, { ReactElement } from "react";

function changeColor(): void {
    const element = document.getElementById("myPdf");
    if (element != null) {
        element.style.backgroundColor = (document.getElementById("back") as HTMLInputElement).value;
    }
}

export default function ChangeBack(): ReactElement {
    return <form><label id="colorBack" htmlFor="back">Changer la couleur du fond</label>
        <select onChange={changeColor} id="back">
            <option value="white">Blanc</option>
            <option value="black">Noir</option>
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="yellow">Jaune</option>
            <option value="green">Vert</option>
        </select></form>
}