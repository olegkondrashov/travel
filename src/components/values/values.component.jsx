import './values.styles.scss';
import happyIcon from '../../assets/homepage/Happy-Icon.svg';
import mountainIcon from '../../assets/homepage/Mountain-Icon.svg';
import tourGuideIcon from '../../assets/homepage/Tour-Guide-Icon.svg';
import timeIcon from '../../assets/homepage/Time-Icon.svg';

const Values = () => {
    return (
        <section className="box">
            <div className="values-section">
                <div className="values-section__item">
                    <div className="values-section__overlap-group">
                        <img className="values-section__img" alt="Happy icon" src={happyIcon} />
                    </div>
                    <div className="values-section__text-wrapper">Customer Delight</div>
                    <p className="values-section__description">
                        We deliver the best service
                        <br />
                        and experience for our customer.
                    </p>
                </div>
                <div className="values-section__item">
                    <div className="values-section__overlap">
                        <img
                            className="values-section__img"
                            alt="Mountain icon"
                            src={mountainIcon}
                        />
                    </div>
                    <div className="values-section__text-wrapper">Authentic Adventure</div>
                    <p className="values-section__description">
                        We deliver the real adventure
                        <br />
                        experience for our customer.
                    </p>
                </div>
                <div className="values-section__item">
                    <div className="values-section__tour-guide-icon-wrapper">
                        <img
                            className="values-section__tour-guide-icon"
                            alt="Tour guide icon"
                            src={tourGuideIcon}
                        />
                    </div>
                    <div className="values-section__text-wrapper">Expert Guides</div>
                    <p className="values-section__description">
                        We deliver only expert
                        <br />
                        tour guides for our customer.
                    </p>
                </div>
                <div className="values-section__item">
                    <div className="values-section__time-icon-wrapper">
                        <img className="values-section__time-icon" alt="Time icon" src={timeIcon} />
                    </div>
                    <div className="values-section__text-wrapper">Time Flexibility</div>
                    <p className="values-section__description">
                        We welcome time flexibility
                        <br />
                        of traveling for our customer.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Values;