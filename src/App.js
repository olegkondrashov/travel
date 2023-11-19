
import "./App.scss";
import Destination from "./components/destination/destination.component";
import Main from "./components/main/main.component";
import Promo from "./components/promo/promo.component";
import Values from "./components/values/values.component";

function App() {
  

  return (
    <div className="App">
        <Main/>
        <Values/>
        <Destination/>
        <Promo/>
    </div>
  );
}

export default App;
