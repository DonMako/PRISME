import React, { ReactElement } from "react";
import ReactDOM from "react-dom/client";
import Menu from "./menu/Menu";
import ViewerPdf from "./pdf/ViewerPdf";
import ToolBar from "./toolbar/ToolBar";
import './i18n';

function App(): ReactElement {

  return <div className="App">
    <Menu />
    <ViewerPdf />
    <ToolBar />
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
