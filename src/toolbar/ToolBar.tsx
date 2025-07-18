import React, { ReactElement } from "react";

import ChangeSize from "./ChangeSize";
import ChangeFront from "./ChangeFront";
import ChangeBack from "./ChangeBack";
import ChangeMargin from "./ChangeMargin";
import ChangePolice from "./ChangePolice";

const ToolBar = function (): ReactElement {
    return <nav id="outils">
        <ChangeSize />
        <ChangeFront />
        <ChangeBack />
        <ChangeMargin />
        <ChangePolice />
    </nav>
}

export default ToolBar;