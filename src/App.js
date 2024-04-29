import "./App.css";
import { DragAndDropBuilder } from "./DragAndDropBuilder";

function App() {
  const parameters = new URLSearchParams(window.location.search);
  const height = parameters.get("height");
  const width = parameters.get("width");
  const type = parameters.get("type");
  const margins = parameters.get("margins");
  return (
    <div className="App">
      <DragAndDropBuilder
        height={height}
        width={width}
        type={type}
        margins={margins ? JSON.parse(margins) : null}
      />
    </div>
  );
}

export default App;
