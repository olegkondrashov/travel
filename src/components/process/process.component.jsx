import line from "../../assets/homepage/Line.png";
import {
    planningIcon,
    bookingIcon,
    preparationIcon,
    experienceIcon,
} from "../../assets/icons.component";

import "./process.styles.scss";

const Process = () => {
    return (
        <section className="process">
            <div className="section-header process__header">
                <h2>PROCESS</h2>
                <h6>HOW IT WORKS</h6>
            </div>
            <div className="process__visualisation visualisation">
                <img className="visualisation__route" src={line} alt="line" />
                <div className="visualisation__items">
                    <div className="visualisation__item">
                        <div className="visualisation__item__icon">
                            {planningIcon}
                        </div>
                        <h5 className="visualisation__item__header">
                            Trip Planning
                        </h5>
                        <p className="visualisation__item__description">
                            We plan on what to do <br /> during the trip days.
                        </p>
                    </div>
                    <div className="visualisation__item">
                        <div className="visualisation__item__icon">
                            {bookingIcon}
                        </div>
                        <h5 className="visualisation__item__header">
                            Trip Booking
                        </h5>
                        <p className="visualisation__item__description">
                            We book the necessary and travels for your trip.
                        </p>
                    </div>
                    <div className="visualisation__item">
                        <div className="visualisation__item__icon">
                            {preparationIcon}
                        </div>
                        <h5 className="visualisation__item__header">
                            Trip Preparation
                        </h5>
                        <p className="visualisation__item__description">
                            We prepare all accommodation and trip necessities.
                        </p>
                    </div>
                    <div className="visualisation__item">
                        <div className="visualisation__item__icon">
                            {experienceIcon}
                        </div>
                        <h5 className="visualisation__item__header">
                            Trip Experience
                        </h5>
                        <p className="visualisation__item__description">
                            We give you the best travel experience with our tour
                            guide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
