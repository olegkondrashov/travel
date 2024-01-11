
import { Outlet } from "react-router-dom";
import "./App.scss";
import Booking from "./components/booking/booking.component";
import Destination from "./components/destination/destination.component";
import Gallery from "./components/gallery/gallery.compomemt";
import MainFooter from "./components/main-footer/main-footer.component";
import Main from "./components/main/main.component";
import Process from "./components/process/process.component";
import Promo from "./components/promo/promo.component";
import Quality from "./components/quality/quality.component";
import Questions from "./components/questions/questions.component";
import Reviews from "./components/reviews/reviews.component";
import Values from "./components/values/values.component";
import MainBlog from "./components/main-blog/main-blog.component";
import Header from "./components/header/header.component";
import PageUp from "./components/page-up/page-up.component";

function App() {
  

  return (
    <div className="App">
        <Header/>
        <Main/>
        <Values/>
        <Destination/>
        <Promo/>
        <Process/>
        <Quality/>
        <Reviews/>
        <Gallery/>
        <Booking/>
        <MainBlog/>
        <Questions/>
        <MainFooter/>
        <Outlet/>
        <PageUp/>
    </div>
  );
}

export default App;
