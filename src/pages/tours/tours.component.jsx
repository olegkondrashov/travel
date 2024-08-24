import { useEffect, useState } from "react";
import BarSection from "../../components/bar-section/bar-section.component";
import DestinationCards from "../../components/destination-cards/destination-cards.component";
import Footer from "../../components/footer/footer.component";
import PageTopTemplate from "../../components/page-top-template/page-top-template.component";
import PageUp from "../../components/page-up/page-up.component";
import { tours } from "../../tours";
import bg from "../../assets/tours/bg-tours.webp";
import "./tours.styles.scss";
import { LayoutProvider } from "../../contexts/layout.context";

const Tours = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

    useEffect(() => {
        // Function to update the state based on window size
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Attach the event listener for resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <LayoutProvider>
            <section className="tours">
                <PageTopTemplate nameOfPage="Tour Packages" bg={bg} />
                <section id="destination1" className="destination1">
                    <BarSection title={"OUR TOUR PACKAGES"} />
                </section>
                <DestinationCards
                    destinationsArray={tours}
                    cardsPerPage={isMobile ? 8 : 9}
                    className="cards-grid-tours"
                />
                <Footer />
                <PageUp />
            </section>
        </LayoutProvider>
    );
};

export default Tours;
