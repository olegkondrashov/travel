import { useEffect, useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import './page-up.styles.scss'

const PageUp = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const pageUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {
                showTopBtn && (<Button onClick={pageUp} buttonType={BUTTON_TYPE_CLASSES.rounded} className='page-up'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90ZM52.5255 45.4942C52.8 45.2196 52.9375 44.8596 52.9375 44.5C52.9375 44.1404 52.8 43.7803 52.5255 43.5058L38.463 29.4433C37.9138 28.8938 37.024 28.8941 36.4745 29.4433C35.925 29.9924 35.925 30.8822 36.4745 31.4317L49.5428 44.5L36.4745 57.5683C35.925 58.1174 35.9254 59.0072 36.4745 59.5567C37.0237 60.1062 37.9135 60.1062 38.463 59.5567L52.5255 45.4942Z" fill="white"/>
                        </svg>
                    </Button>)
                
            }
        </>
    )
}

export default PageUp;