import Button from "../button/button.component";

import paradise from '../../assets/homepage/promo_paradise.jpg';
import adventure from '../../assets/homepage/promo_adventure.jpg';

import './promo.styles.scss';

const Promo = () => {
    return (
        <section className="promo">
            <div className="promo-item promo-item-paradise">
                <img className="promo-item__img" src={paradise} alt="ESCAPE TO PARADISE" />
                <div className="promo-item__content">
                    <h3>ESCAPE TO PARADISE</h3>
                    <p>Book now and save 20% on your tropical getaway!</p>
                </div>
                <div className="promo-item__btn">
                    <Button>Book Now</Button>
                </div>
            </div>
            <div className="promo-item promo-item-adventure">
                <img className="promo-item__img" src={adventure} alt="ADVENTURE AWAITS" />
                <div className="promo-item__content">
                    <h3>ADVENTURE AWAITS</h3>
                    <p>Book a tour today, get FREE hiking excursion!</p>
                </div>
                <div className="promo-item__btn">
                    <Button>Book Now</Button>
                </div>
            </div>
        </section>
    )
}

export default Promo;