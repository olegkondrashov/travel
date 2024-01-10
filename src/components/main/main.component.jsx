import bg from "../../assets/homepage/bg.webp";
import SearchForm from "../search-form/search-form.component";

import "./main.styles.scss";

const Main = () => {


  return (
    <section className="main">
        <img className="background-image" src={bg} alt="background" />
        <div className="main-header">
            <h6 className="main-header__subtitle">DISCOVER YOUR NEXT</h6>
            <h1 className="main-header__title">ADVENTURE</h1>
            <p className="main-header__description">
                Experience the thrill of exploring the world&#39;s most fascinating
                destinations
                <br />
                with our expertly curated travel packages.
            </p>
        </div>
        <SearchForm/>
      
    </section>
  );
};

export default Main;
