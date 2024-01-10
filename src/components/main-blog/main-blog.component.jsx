import blogImg1 from '../../assets/homepage/blog/blog-img1.webp';
import blogImg2 from '../../assets/homepage/blog/blog-img2.webp';
import blogImg3 from '../../assets/homepage/blog/blog-img3.webp';
import blogAuthor from '../../assets/homepage/blog/author.webp';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './main-blog.styles.scss';

const MainBlog = () => {
    return (
        <section className='main-blog'>
            <div className="section-header main-blog__header">
                <h2>main-blog</h2>
                <h6>VACASKY NEWS & UPDATES</h6>
            </div>
            <div className='main-blog__content'>
                <div className='main-blog__content__item main-blog-item'>
                    <img className='main-blog-item__img' src={blogImg1} alt="main-blog img" />
                    <div className='main-blog-item__content'>
                        <p>T R A V E L</p>
                        <h3>10 Must-See Attractions in Greece</h3>
                        <div className='main-blog-item__author'>
                            <img src={blogAuthor} alt="author of main-blog" />
                            <div className='main-blog-item__author__name'>
                                <h6>Sarah Johnson</h6>
                                <p>Content manager</p>
                            </div>
                        </div>
                    </div>
                    <a href='/#' className="main-blog-item__button">
                        <Button buttonType={BUTTON_TYPE_CLASSES.rounded}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M24.75 18.0001C24.75 18.2878 24.64 18.5758 24.4204 18.7954L13.1704 30.0454C12.7308 30.485 12.0189 30.485 11.5796 30.0454C11.1403 29.6058 11.14 28.894 11.5796 28.4547L22.0342 18.0001L11.5796 7.54543C11.14 7.10583 11.14 6.39399 11.5796 5.95468C12.0192 5.51536 12.7311 5.51508 13.1704 5.95468L24.4204 17.2047C24.64 17.4243 24.75 17.7123 24.75 18.0001Z" fill="#000"/>
                            </svg>
                        </Button>
                    </a>
                </div>
                <div className='main-blog__content__item main-blog-item'>
                    <img src={blogImg2} alt="main-blog img" />
                    <div className="main-blog-item__content">
                        <p>G U I D E</p>
                        <h4>Our Beginner's Guide to Hiking in the Swiss Alps</h4>
                    </div>
                    <a href='/#' className="main-blog-item__button">
                        <Button buttonType={BUTTON_TYPE_CLASSES.rounded}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M24.75 18.0001C24.75 18.2878 24.64 18.5758 24.4204 18.7954L13.1704 30.0454C12.7308 30.485 12.0189 30.485 11.5796 30.0454C11.1403 29.6058 11.14 28.894 11.5796 28.4547L22.0342 18.0001L11.5796 7.54543C11.14 7.10583 11.14 6.39399 11.5796 5.95468C12.0192 5.51536 12.7311 5.51508 13.1704 5.95468L24.4204 17.2047C24.64 17.4243 24.75 17.7123 24.75 18.0001Z" fill="#000"/>
                            </svg>
                        </Button>
                    </a>
                </div>
                <div className='main-blog__content__item main-blog-item'>
                    <img src={blogImg3} alt="main-blog img" />
                    <div className="main-blog-item__content">
                        <p>I N S P I R A T I O N</p>
                        <h4>Solo Travel: The Best Thing You Can Do For Yourself</h4>
                    </div>
                    <a href='/#' className="main-blog-item__button">
                        <Button buttonType={BUTTON_TYPE_CLASSES.rounded}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M24.75 18.0001C24.75 18.2878 24.64 18.5758 24.4204 18.7954L13.1704 30.0454C12.7308 30.485 12.0189 30.485 11.5796 30.0454C11.1403 29.6058 11.14 28.894 11.5796 28.4547L22.0342 18.0001L11.5796 7.54543C11.14 7.10583 11.14 6.39399 11.5796 5.95468C12.0192 5.51536 12.7311 5.51508 13.1704 5.95468L24.4204 17.2047C24.64 17.4243 24.75 17.7123 24.75 18.0001Z" fill="#000"/>
                            </svg>
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default MainBlog;