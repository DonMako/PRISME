import ChangeSize from "./ChangeSize";
import ChangeFront from "./ChangeFront";
import ChangeBack from "./ChangeBack";
import ChangeMargin from "./ChangeMargin";
import ChangeImages from "./ChangeImages";
import ChangePolice from "./ChangePolice";

const ToolBar = () => {
    return <nav id="parametres" style={{'display':'flex'}}>
        <ChangeSize/>
        <ChangeFront/>
        <ChangeBack/>
        <ChangeMargin/>
        <ChangeImages/>
        <ChangePolice/>
    </nav>
}

export default ToolBar;