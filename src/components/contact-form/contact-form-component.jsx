import map from "../../assets/aboutUs/map.png";
import dots from "../../assets/icons/Dots.png";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./contact-form.styles.scss";

const ContaktForm = () => {
    return (
        <section className="contact">
            <div className="contact-form">
                <h4 className="contact-form__title">CONTACT INFORMATION</h4>
                <div className="contact-form__dots">
                    <img src={dots} alt="dots" />
                </div>
                <div className="contact-form__number">
                    <label htmlFor="phone-number">PHONE</label>
                    <br />
                    <a
                        id="phone-number"
                        className="phone-number"
                        href="tel:+1555555555"
                    >
                        +1-555-555-555
                    </a>
                </div>
                <div className="contact-form__email">
                    <label htmlFor="contact-form__email">EMAIL</label>
                    <br />
                    <a
                        id="contact-form__email"
                        href="mailto:condrashov.oleh@gmail.com"
                    >
                        condrashov.oleh@gmail.com
                    </a>
                </div>
                <div className="contact-form__address">
                    <label htmlFor="contact-form__address">ADDRESS</label>
                    <br />
                    <p id="contact-form__address">
                        38667 Bad Harzburg, Germany
                    </p>
                </div>
                <Button
                    className="contact-form__btn"
                    buttonType={BUTTON_TYPE_CLASSES.blue}
                >
                    CONTACT US
                </Button>
            </div>
            <div className="contact-map">
                <img
                    className="contact-map__img"
                    src={map}
                    alt="our location"
                />
            </div>
        </section>
    );
};

export default ContaktForm;
