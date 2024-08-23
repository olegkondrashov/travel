import searchIcon from "../../assets/icons/search_icon.png";
import "./bar-section.styles.scss";

const BarSection = () => {
    return (
        <div className="bar-section">
            <div>
                <h4 className="subtitle">POPULAR DESTINATIONS</h4>
            </div>

            <div className="search-input">
                <input id="search" type="search" placeholder="Search" />
                <button>
                    <img src={searchIcon} alt="search icon" />
                </button>
            </div>

            <div className="bar-section__buttons">
                <button data-destination="all" className="button btnJs active">
                    All
                </button>
                <button data-destination="best" className="button btnJs">
                    Best Seller
                </button>
                <button data-destination="nature" className="button btnJs">
                    Nature
                </button>
                <button data-destination="city" className="button btnJs">
                    City
                </button>
                <button data-destination="seasonal" className="button btnJs">
                    Seasonal
                </button>
            </div>

            <div className="bar-section__buttons">
                <button className="button button-with-icon button-grid active">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_1_58)">
                            <path
                                d="M6.90594 0H2.31281C1.03754 0 0 1.03754 0 2.31281V6.90594C0 8.18121 1.03754 9.21875 2.31281 9.21875H6.90594C8.18121 9.21875 9.21875 8.18121 9.21875 6.90594V2.31281C9.21875 1.03754 8.18121 0 6.90594 0ZM7.65625 6.90594C7.65625 7.31965 7.31965 7.65625 6.90594 7.65625H2.31281C1.8991 7.65625 1.5625 7.31965 1.5625 6.90594V2.31281C1.5625 1.8991 1.8991 1.5625 2.31281 1.5625H6.90594C7.31965 1.5625 7.65625 1.8991 7.65625 2.31281V6.90594Z"
                                fill="black"
                            />
                            <path
                                d="M17.6562 0H13.125C11.8327 0 10.7812 1.05141 10.7812 2.34375V6.875C10.7812 8.16734 11.8327 9.21875 13.125 9.21875H17.6562C18.9486 9.21875 20 8.16734 20 6.875V2.34375C20 1.05141 18.9486 0 17.6562 0ZM18.4375 6.875C18.4375 7.30578 18.087 7.65625 17.6562 7.65625H13.125C12.6942 7.65625 12.3438 7.30578 12.3438 6.875V2.34375C12.3438 1.91297 12.6942 1.5625 13.125 1.5625H17.6562C18.087 1.5625 18.4375 1.91297 18.4375 2.34375V6.875Z"
                                fill="black"
                            />
                            <path
                                d="M6.90594 10.7812H2.31281C1.03754 10.7812 0 11.8188 0 13.0941V17.6872C0 18.9625 1.03754 20 2.31281 20H6.90594C8.18121 20 9.21875 18.9625 9.21875 17.6872V13.0941C9.21875 11.8188 8.18121 10.7812 6.90594 10.7812ZM7.65625 17.6872C7.65625 18.1009 7.31965 18.4375 6.90594 18.4375H2.31281C1.8991 18.4375 1.5625 18.1009 1.5625 17.6872V13.0941C1.5625 12.6804 1.8991 12.3438 2.31281 12.3438H6.90594C7.31965 12.3438 7.65625 12.6804 7.65625 13.0941V17.6872Z"
                                fill="black"
                            />
                            <path
                                d="M17.6562 10.7812H13.125C11.8327 10.7812 10.7812 11.8327 10.7812 13.125V17.6562C10.7812 18.9486 11.8327 20 13.125 20H17.6562C18.9486 20 20 18.9486 20 17.6562V13.125C20 11.8327 18.9486 10.7812 17.6562 10.7812ZM18.4375 17.6562C18.4375 18.087 18.087 18.4375 17.6562 18.4375H13.125C12.6942 18.4375 12.3438 18.087 12.3438 17.6562V13.125C12.3438 12.6942 12.6942 12.3438 13.125 12.3438H17.6562C18.087 12.3438 18.4375 12.6942 18.4375 13.125V17.6562Z"
                                fill="black"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_58">
                                <rect width="20" height="20" fill="black" />
                            </clipPath>
                        </defs>
                    </svg>
                    Grid View
                </button>
                <button className="button button-with-icon button-flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_1_75)">
                            <path
                                d="M19 11H1C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10C20 10.2652 19.8946 10.5196 19.7071 10.7071C19.5196 10.8946 19.2652 11 19 11ZM19 4H1C0.734784 4 0.48043 3.89464 0.292893 3.70711C0.105357 3.51957 0 3.26522 0 3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3C20 3.26522 19.8946 3.51957 19.7071 3.70711C19.5196 3.89464 19.2652 4 19 4ZM19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17C0 16.7348 0.105357 16.4804 0.292893 16.2929C0.48043 16.1054 0.734784 16 1 16H19C19.2652 16 19.5196 16.1054 19.7071 16.2929C19.8946 16.4804 20 16.7348 20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z"
                                fill="#222222"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_75">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    List View
                </button>
            </div>
        </div>
    );
};

export default BarSection;
