
import "./App.scss";
import Destination from "./components/destination/destination.component";
import Main from "./components/main/main.component";
import Process from "./components/process/process.component";
import Promo from "./components/promo/promo.component";
import Quality from "./components/quality/quality.component";
import Values from "./components/values/values.component";

function App() {
  

  return (
    <div className="App">
        <Main/>
        <Values/>
        <Destination/>
        <Promo/>
        <Process/>
        <Quality/>
    </div>
  );
}

export default App;
