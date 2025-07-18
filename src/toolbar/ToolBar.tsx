import React, { ReactElement, useState } from "react";
import ChangeSize from "./ChangeSize";
import ChangeFront from "./ChangeFront";
import ChangeBack from "./ChangeBack";
import ChangeMargin from "./ChangeMargin";
import ChangePolice from "./ChangePolice";

export default function ToolBar(): ReactElement {

    const [open, setOpen] = useState(false);

    function displayTools(): void {
        if (open) {
            setOpen(false);
            document.getElementById("tools")!.style.display = "flex";
        } else {
            setOpen(true);
            document.getElementById("tools")!.style.display = "none";
        }
    }

    return <div id="toolbox">
        <button id="toolboxButton" onClick={displayTools}><img id="toolboxSymbol" src="/images/toolbox.svg" /></button>
        <section id="tools">
            <ChangeSize />
            <section id="changeColor">
                <ChangeFront />
                <ChangeBack />
            </section>
            <ChangeMargin />
            <ChangePolice />
        </section>
    </div>
}