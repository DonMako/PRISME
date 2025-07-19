import React, { ReactElement, useState } from "react";
import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";

export default function ToolBar(): ReactElement {

	return <div id="menu">
		<ChangeTheme />
		<ChangeLanguage />
	</div>
}