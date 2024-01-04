import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import gallery1 from '../../assets/homepage/gallery/gallery-1.webp';
import gallery2 from '../../assets/homepage/gallery/gallery-2.webp';
import gallery3 from '../../assets/homepage/gallery/gallery-3.webp';
import gallery4 from '../../assets/homepage/gallery/gallery-4.webp';
import gallery5 from '../../assets/homepage/gallery/gallery-5.webp';

import './gallery.styles.scss';


const Gallery = () => {
    return (
        <section className='gallery'>
            <div className="section-header gallery__header">
                <h2>GALLERY</h2>
                <h6>OUR ADVENTURES</h6>
            </div>
            <div className='gallery__fotos'>
                <img src={gallery4} alt="gallery foto" />
                <img src={gallery3} alt="gallery foto" />
                <img src={gallery2} alt="gallery foto" />
                <img src={gallery5} alt="gallery foto" />
                <img src={gallery1} alt="gallery foto" />
            </div>
            <a href="https://instagram.com" target='blank'>
                <Button buttonType={BUTTON_TYPE_CLASSES.transparentBlue}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_6_671)">
                            <path d="M18 0H6.00024C2.70062 0 0.000389099 2.70023 0.000389099 5.99985V18.0001C0.000389099 21.2989 2.70062 24 6.00024 24H18C21.2996 24 23.9998 21.2989 23.9998 18.0001V5.99985C23.9998 2.70023 21.2996 0 18 0ZM21.9998 18.0001C21.9998 20.2051 20.2061 22 18 22H6.00024C3.795 22 2.00044 20.2051 2.00044 18.0001V5.99985C2.00044 3.79432 3.795 2.00005 6.00024 2.00005H18C20.2061 2.00005 21.9998 3.79432 21.9998 5.99985V18.0001Z" fill="#4997D3"/>
                            <path d="M18.5008 6.99993C19.3292 6.99993 20.0008 6.32837 20.0008 5.49996C20.0008 4.67156 19.3292 4 18.5008 4C17.6724 4 17.0009 4.67156 17.0009 5.49996C17.0009 6.32837 17.6724 6.99993 18.5008 6.99993Z" fill="#4997D3"/>
                            <path d="M12 6C8.68567 6 6.00014 8.68581 6.00014 11.9999C6.00014 15.3127 8.68567 18.0003 12 18.0003C15.3134 18.0003 17.9999 15.3127 17.9999 11.9999C17.9999 8.68581 15.3134 6 12 6ZM12 16.0002C9.79113 16.0002 8.00019 14.2093 8.00019 11.9999C8.00019 9.7904 9.79113 8.00005 12 8.00005C14.2089 8.00005 15.9998 9.7904 15.9998 11.9999C15.9998 14.2093 14.2089 16.0002 12 16.0002Z" fill="#4997D3"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_6_671">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg> 
                    FOLLOW US ON @VACASKY.CO
                </Button>
            </a>
        </section>
    )
}

export default Gallery