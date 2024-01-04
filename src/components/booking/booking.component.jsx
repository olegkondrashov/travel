import bookingImg from '../../assets/homepage/booking.webp';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './booking.styles.scss'


const Booking = () => {
    return (
        <section className='booking'>
            <img className='booking__background' src={bookingImg} alt="booking background" />
            <div className='booking__action'>
                <div className="section-header booking__header">
                    <h6>BOOK YOUR DREAM VACATION</h6>
                    <h2>TODAY</h2>
                </div>
                <p>Let us help you create unforgettable memories with our special tours and destinations.</p>
                <Button buttonType={BUTTON_TYPE_CLASSES.gray}>
                    Book Now
                </Button>
            </div>
            <div className='booking__location'>
                <svg className='booking__location__path' xmlns="http://www.w3.org/2000/svg" width="50" height="148" viewBox="0 0 50 148" fill="none">
                    <path d="M50 1H1V148" stroke="white" strokeDasharray="5 15"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0C7.58889 0 4 3.58889 4 8.00002C4 9.32423 4.33108 10.6372 4.96047 11.8018L11.5625 23.7422C11.6504 23.9014 11.8179 24 12 24C12.1821 24 12.3496 23.9014 12.4375 23.7422L19.042 11.7978C19.669 10.6372 20 9.32419 20 7.99997C20 3.58889 16.4111 0 12 0ZM12 12C9.79445 12 8.00003 10.2056 8.00003 8.00002C8.00003 5.79445 9.79445 4.00003 12 4.00003C14.2056 4.00003 16 5.79445 16 8.00002C16 10.2056 14.2056 12 12 12Z" fill="white"/>
                </svg>
                <p>Santorini, Greece</p>
            </div>
        </section>
    )
}

export default Booking;