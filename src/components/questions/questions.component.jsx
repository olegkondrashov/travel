import { useState } from "react";
import dots from "../../assets/homepage/questions-dots.png";

import './questions.styles.scss';

const Questions = () => {

    const answers = [
        {
            question: 'What type of travel packages does Vacasky offer?',
            answer: 'Vacasky offers a wide range of travel packages to destinations around the world, including customized tours, group tours, luxury travel, adventure travel, and more. Our travel specialists work with you to create an itinerary that meets your specific needs and preferences.',
        },
        {
            question: 'How do I book a trip with Vacasky?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis aliquam, aliquid animi soluta in officia quasi consequuntur, non qui repellat dolor ex distinctio expedita quidem beatae nulla, corrupti amet.',
        },
        {
            question: 'What is the payment process for Vacasky?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis aliquam, aliquid animi soluta in officia quasi consequuntur, non qui repellat dolor ex distinctio expedita quidem beatae nulla, corrupti amet.',
        },
        {
            question: 'How to cancel my booking in Vacasky?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis aliquam, aliquid animi soluta in officia quasi consequuntur, non qui repellat dolor ex distinctio expedita quidem beatae nulla, corrupti amet.',
        }
    ]

    const [activeIndex, setActiveIndex] = useState(null);

    const handleDivClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };


    return (
        <section className='questions'>
            <div className='questions__items'>
                {answers.map((item, index) => (
                    <div key={index} onClick={() => handleDivClick(index)} className="questions__items__item">
                        <div className="item-question">
                            <h5>{item.question}</h5>
                            <div className={index === activeIndex ? 'item-question__arrow item-question__arrow-reverse' : 'item-question__arrow'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 16.5C11.8082 16.5 11.6162 16.4267 11.4697 16.2803L3.96974 8.7803C3.67667 8.48723 3.67667 8.01267 3.96974 7.7198C4.2628 7.42692 4.73736 7.42673 5.03024 7.7198L12 14.6895L18.9697 7.7198C19.2628 7.42673 19.7374 7.42673 20.0302 7.7198C20.3231 8.01286 20.3233 8.48742 20.0302 8.7803L12.5302 16.2803C12.3838 16.4267 12.1918 16.5 12 16.5Z" fill="#4997D3"/>
                                </svg>
                            </div>
                        </div>
                        <p className={index === activeIndex ? 'item-answer answer-open' : 'item-answer'}>
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
            <div className='questions__description'>
                <div>
                    <h3>Frequently Asked Questions</h3>
                    <p>What our clients usually asked about our services and tours.</p>
                </div>
                <div className="questions__description__dots">
                    <img src={dots} alt="dots" />
                </div>
            </div>
        </section>
    )
}

export default Questions;