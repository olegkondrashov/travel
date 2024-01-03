import { useState } from 'react';
import reviewsImg from '../../assets/homepage/reviews-img.png';
import quoteIcon from '../../assets/homepage/quote-Icon.svg';


import './reviews.styles.scss';


const Reviews = () => {

    const reviews = [
        {
            clientsName: 'Sarah Johnson',
            clientsDescribe: 'Client from Kanada',
            clientsReview: "I've traveled with Vacasky several times, and each time has been a unique and unforgettable experience. Their team of travel specialists are knowledgeable, friendly, and always go the extra mile to make sure that everything and everyone is taken care of. I highly recommend Vacasky to anyone looking for a truly special travel experience!"
        },
        {
            clientsName: 'Hannah Johnson',
            clientsDescribe: 'Client from Französisch-Polynesien',
            clientsReview: " Their team of travel specialists are knowledgeable, friendly, and always go the extra mile to make sure that everything and everyone is taken care of. I highly recommend Vacasky to anyone looking for a truly special travel experience!"
        },
        {
            clientsName: 'Michel Johnson',
            clientsDescribe: 'Client from Africa',
            clientsReview: " Lorem ipsum. I highly recommend Vacasky to anyone looking for a truly special travel experience!"
        },
        {
            clientsName: 'Hermine Johnson',
            clientsDescribe: 'Client from Siberia',
            clientsReview: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore labore sint fugit distinctio ipsum, quis iste, nemo molestias accusamus modi eaque ab laudantium officia id voluptates reprehenderit hic, eligendi aliquid."
        },
        {
            clientsName: 'Kristina Johnson',
            clientsDescribe: 'Client from Australia',
            clientsReview: "I highly recommend Vacasky to anyone looking for a truly special travel experience! Tempore labore sint fugit distinctio ipsum, quis iste, nemo molestias accusamus modi eaque ab laudantium officia id voluptates reprehenderit hic, eligendi aliquid."
        }
    ]
    
    
    const [activeIndex, setActiveIndex] = useState(1);

    const handleDivClick = (index) => {
        setActiveIndex(index === activeIndex ? activeIndex : index);
    };

    return (
        <section className="reviews">
            <div className='reviews__img'>
                <img className='reviews__img__background' src={reviewsImg} alt="reviews section background" />
                <img className='reviews__img__quote' src={quoteIcon} alt="quoteIcon" />
                <p className='reviews__img__content'>
                    {
                        reviews[activeIndex].clientsReview
                    }
                </p>
                <div className='reviews__img__persons reviews__persons' >
                    {reviews.map((item, index) => (
                        <div key={index} className='reviews__img__persons__person reviews__persons__person'>
                            <div
                                onClick={() => handleDivClick(index)}
                                className={index === activeIndex ? 'active' : ''}
                            >
                            </div>
                                <h5>{item.clientsName}</h5>
                                <p>{item.clientsDescribe}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews;