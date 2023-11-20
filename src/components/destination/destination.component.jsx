import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './destination.styles.scss'
import DestinationItem from '../destination-item/destination-item.component';

import thailand from '../../assets/homepage/thailand.jpg';
import japan from '../../assets/homepage/japan.jpg';
import greece from '../../assets/homepage/greece.jpg';
import switzerland from '../../assets/homepage/switzerland.jpg';

const Destination = () => {

    const buttons = ['All', 'Best Seller', 'Nature', 'City', 'Seasonal'];
    const popularDestinations = [
        {
            name: 'Thailand',
            img: thailand
        },
        {
            name: 'Japan',
            img: japan
        },
        {
            name: 'Greece',
            img: greece
        },
        {
            name: 'Switzerland',
            img: switzerland
        }
    ]

    return (
        <section className="destination">
            <div className="section-header destination__header">
                <h2>DESTINATION</h2>
                <h6>POPULAR DESTINATIONS</h6>
            </div>
            <div className="destination__links">
                <div className='destination__links__buttons'>
                    {buttons.map((btn, index) => (
                        <Button 
                            key={index} 
                            buttonType={BUTTON_TYPE_CLASSES.gray}>
                                {btn}
                        </Button>
                        ))
                    }
                </div>
                <div className='destination__links__cards'>
                    {popularDestinations.map((item, index) => (
                        <DestinationItem 
                            key={index} 
                            name={item.name}
                            img={item.img}/>

                        ))
                    }
                </div>
                <div className='destination__links__confirm-button'>
                    <Button buttonType={BUTTON_TYPE_CLASSES.transparent}>
                        Load More Destinations
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Destination;