import React, { ReactElement } from "react";
import ReactDOM from "react-dom/client";
import ToolBar from "./toolbar/ToolBar";
import ChangeMode from "./ChangeMode";
import ViewerPdf from "./pdf/ViewerPdf";

const App = function (): ReactElement {

  return <div className="App">
    <ChangeMode />
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
