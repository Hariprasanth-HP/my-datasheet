import logo from "./logo.svg";
import "./App.css";
import { DataSheet } from "./components/DataSheet";

function App() {
  const para = "hari";
  return (
    <div className="App">
      <DataSheet para={para} />
    </div>
  );
}

export default App;
