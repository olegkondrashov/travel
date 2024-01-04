
import "./App.scss";
import Destination from "./components/destination/destination.component";
import Gallery from "./components/gallery/gallery.compomemt";
import Main from "./components/main/main.component";
import Process from "./components/process/process.component";
import Promo from "./components/promo/promo.component";
import Quality from "./components/quality/quality.component";
import Reviews from "./components/reviews/reviews.component";
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
        <Reviews/>
        <Gallery/>
    </div>
  );
}

export default App;
