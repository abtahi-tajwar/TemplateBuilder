import logo from "./logo.svg";
import "./App.css";
import { DragAndDropBuilder } from "./DragAndDropBuilder";
import { useEffect } from "react";

function App() {
  const parameters = new URLSearchParams(window.location.search);
  const height = parameters.get("height");
  const width = parameters.get("width");
  return (
    <div className="App">
      <DragAndDropBuilder height={height} width={width} />
    </div>
  );
}

export default App;
