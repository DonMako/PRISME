import React, { ReactElement, useState } from "react";

const ChangeMode = function (): ReactElement {

    const [dark, setDark] = useState(true);

    function change(): void {
        if (dark) {
            setDark(false);
            document.getElementById("boutonMode")?.setAttribute("value", "Mode clair");
            document.getElementById("symboleMode")?.setAttribute("src", "/images/moon.svg");
            lighten();
        } else {
            setDark(true);
            document.getElementById("boutonMode")?.setAttribute("value", "Mode sombre");
            document.getElementById("symboleMode")?.setAttribute("src", "/images/sun.svg");
            darken();
        }
    }

    function lighten(): void {
        const element = document.getElementById("myPdf");
        if (element != null) {
            element.style.border = "2px solid black";
        }
        let body = document.getElementsByTagName("body")[0];
        body.style.color = "black";
        body.style.backgroundColor = "white";
    }

    function darken(): void {
        const element = document.getElementById("myPdf");
        if (element != null) {
            element.style.border = "2px solid white";
        }
        let body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "black";
    }

    return <button id="boutonModes" onClick={change}><img id="symboleMode" src="/images/sun.svg" /></button>
}

export default ChangeMode;