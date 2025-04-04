import React, { ReactElement } from 'react';

const eclaircir = function(): void {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.style.border = "2px solid black";
    }
    let body = document.getElementsByTagName('body')[0];
    body.style.color = "black";
    body.style.backgroundColor = "white";
}

const assombrir = function(): void {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.style.border = "2px solid white";
    }
    let body = document.getElementsByTagName('body')[0];
    body.style.color = "white";
    body.style.backgroundColor = "black";
}

const ChangeMode = function(): ReactElement {
    return <div id="boutonsModes">
        <button onClick={eclaircir}>Mode clair</button>
        <button onClick={assombrir}>Mode sombre</button>
    </div>
}

export default ChangeMode;