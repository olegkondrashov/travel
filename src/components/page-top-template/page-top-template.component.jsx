import { Link } from "react-router-dom";
import Header from "../header/header.component";

import "./page-top-template.styles.scss";

const PageTopTemplate = ({ nameOfPage, childOfPage, bg, link }) => {
    return (
        <section className="hero">
            <img
                className="hero__bg"
                src={bg}
                alt={`${nameOfPage} background`}
            />
            <Header />
            <div className="container">
                <div>
                    <Link to="/" className="hero-link">
                        Home
                    </Link>
                    <span> | </span>
                    <Link className="hero-link" to={`/${link}`}>
                        {nameOfPage}
                    </Link>
                    {childOfPage ? (
                        <>
                            <span> | </span>
                            <a
                                className="hero-link"
                                href={`/${childOfPage.toLowerCase()}`}
                            >
                                {childOfPage}
                            </a>
                        </>
                    ) : null}
                </div>
                <h1 className="title">{nameOfPage.toUpperCase()}</h1>
            </div>
        </section>
    );
};

export default PageTopTemplate;
