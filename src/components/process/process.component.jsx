
import line from '../../assets/homepage/Line.png';
import { planningIcon, bookingIcon, preparationIcon, experienceIcon } from '../../assets/icons.component';

import './process.styles.scss';

const Process = () => {

    return (
        <section className="process"> 
            <div className="section-header process__header">
                <h2>PROCESS</h2>
                <h6>HOW IT WORKS</h6>
            </div>
            <div className='process__visualisation visualisation'>
                {/* <svg className='visualisation__route' xmlns="http://www.w3.org/2000/svg" width="100%" height="196" viewBox="0 0 1148 196" fill="none">
                    <path width="100%" opacity="0.15" d="M1 64.0001C49.8333 127.167 192.5 238 372.5 176C597.5 98.5001 728.5 -98.9999 978.5 64.0001C1178.5 194.4 1164.83 186.333 1133 166" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeDasharray="20 20"/>
                </svg> */}
                <img className='visualisation__route' src={line} alt="line" />
                <div className='visualisation__items'>
                    <div className="visualisation__item">
                        <div className='visualisation__item__icon'>
                            {planningIcon}
                        </div>
                        <h5 className='visualisation__item__header'>Trip Planning</h5>
                        <p className='visualisation__item__description'>We plan on what to do <br /> during the trip days.</p>
                    </div>
                    <div className="visualisation__item">
                        <div className='visualisation__item__icon'>
                            {bookingIcon}
                        </div>
                        <h5 className='visualisation__item__header'>Trip Booking</h5>
                        <p className='visualisation__item__description'>We book the necessary and travels for your trip.</p>
                    </div>
                    <div className="visualisation__item">
                        <div className='visualisation__item__icon'>
                            {preparationIcon}
                        </div>
                        <h5 className='visualisation__item__header'>Trip Preparation</h5>
                        <p className='visualisation__item__description'>We prepare all accommodation and trip necessities.</p>
                    </div>
                    <div className="visualisation__item">
                        <div className='visualisation__item__icon'>
                            {experienceIcon}
                        </div>
                        <h5 className='visualisation__item__header'>Trip Experience</h5>
                        <p className='visualisation__item__description'>We give you the best travel experience with our tour guide.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process;