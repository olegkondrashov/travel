import { useState } from "react";
import bg from "../../assets/aboutUs/bg.webp";
import bg1 from "../../assets/aboutUs/bg1.webp";
import bg2 from "../../assets/aboutUs/bg2.webp";
import bg3 from "../../assets/aboutUs/bg3.webp";
import bg4 from "../../assets/aboutUs/bg4.webp";
import {
    planningIcon,
    bookingIcon,
    preparationIcon,
    experienceIcon,
} from "../../assets/icons.component";
import play from "../../assets/icons/Play-Button.png";
import PageTopTemplate from "../../components/page-top-template/page-top-template.component";
import Values from "../../components/values/values.component";
import "./about.styles.scss";
import { LayoutProvider } from "../../contexts/layout.context";
import Footer from "../../components/footer/footer.component";
import Team from "../../components/team/team.section";

const About = () => {
    const iconItems = [
        {
            id: "item1",
            icon: planningIcon,
            title: "Trip Planning",
            description: "We plan on what to do during the trip days.",
            link: "/trip-planning",
            background: bg1,
        },
        {
            id: "item2",
            icon: bookingIcon,
            title: "Trip Booking",
            description:
                "We book the necessary hotel and travels for your trip.",
            link: "/trip-booking",
            background: bg2,
        },
        {
            id: "item3",
            icon: preparationIcon,
            title: "Trip Preparation",
            description: "We prepare all accommodation and trip necessities.",
            link: "/trip-preparation",
            background: bg3,
        },
        {
            id: "item4",
            icon: experienceIcon,
            title: "Trip Experience",
            description:
                "We give you the best travel experience with our tour guide.",
            link: "/trip-experience",
            background: bg4,
        },
    ];

    const [activeItem, setActiveItem] = useState(iconItems[0].id);
    const [currentContent, setCurrentContent] = useState({
        title: iconItems[0].title,
        description: iconItems[0].description,
        link: iconItems[0].link,
        background: iconItems[0].background,
    });

    const toggleActive = (item) => {
        setActiveItem(item);
        const selectedItem = iconItems.find((icon) => icon.id === item);
        setCurrentContent({
            title: selectedItem.title,
            description: selectedItem.description,
            link: selectedItem.link,
            background: selectedItem.background,
        });
    };

    return (
        <LayoutProvider>
            <section className="about">
                <PageTopTemplate nameOfPage="About Us" bg={bg} link="about" />
                <main className="about-main">
                    <section className="about__description">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M31.0959 0.903346C29.8729 -0.319654 27.8837 -0.299217 26.6861 0.948721L20.1308 7.77978L4.13319 2.4856L0.775 5.84385L14.1095 14.0542L7.36225 21.085L3.03531 20.3747L0 23.41L6.36125 25.638L8.58931 31.9993L11.6246 28.964L10.9143 24.637L17.9451 17.8898L26.1554 31.2243L29.5137 27.866L24.2196 11.8685L31.0505 5.31316C32.2985 4.11553 32.3189 2.12641 31.0959 0.903346Z"
                                fill="#222222"
                            />
                        </svg>
                        <p>
                            Vacasky Travel Agency is the perfect travel agency
                            for your every memorable trips. With our expert
                            guides, we are both professional and personal. Our
                            trips are consisted of unforgettable experiences and
                            is delivered in a sustainable way to protect the
                            environment.
                        </p>
                    </section>
                    <section className="about__values">
                        <Values />
                    </section>
                    <section className="about__visualisation">
                        <div className="about__visualisation__icons icons">
                            {iconItems.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => toggleActive(item.id)}
                                    className={`visualisation__item__icon icons__icon ${
                                        activeItem === item.id
                                            ? "icons__icon__active"
                                            : ""
                                    }`}
                                >
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                        <div className="about__visualisation__video">
                            <img src={currentContent.background} alt="" />
                            <div>
                                <h4>HOW IT WORKS</h4>
                                <p>{currentContent.description}</p>
                            </div>
                            <div>
                                <h2>{currentContent.title}</h2>
                                <a href={currentContent.link}>
                                    <img src={play} alt="play button" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <Team />
                </main>
            </section>
            <Footer />
        </LayoutProvider>
    );
};

export default About;
