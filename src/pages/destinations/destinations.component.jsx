// This section of the code was originally written using only HTML, CSS, and JavaScript
// during a period when I was teaching teenage students. As a result, the code is
// intentionally kept simple and straightforward, without leveraging React or more advanced
// practices. The code might appear rudimentary and unrefined, reflecting the educational
// context in which it was developed.

import React, { useEffect, useLayoutEffect } from "react";
import { destinations } from "../../destinations";
import searchIcon from "../../assets/icons/search_icon.png";

import "./destinations.styles.scss";
import Footer from "../../components/footer/footer.component";
import PageUp from "../../components/page-up/page-up.component";
import PageTopTemplate from "../../components/page-top-template/page-top-template.component";

const Destinations = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    const cardChunks = chunkArray(destinations, 11);

    useEffect(() => {
        const btn1 = document.querySelectorAll(".btnJs"),
            btn2 = document.querySelectorAll(".button-with-icon"),
            buttonGrid = document.querySelector(".button-grid"),
            buttonFlex = document.querySelector(".button-flex"),
            cards = document.querySelectorAll(".cards"),
            card = document.querySelectorAll(".card"),
            paginationWrapper = document.querySelector(
                ".cards-pagination-wrapper"
            ),
            prevSlide = document.querySelector(
                ".cards-pagination__button-prev"
            ),
            nextSlide = document.querySelector(
                ".cards-pagination__button-next"
            ),
            pagination = document.querySelector(".cards-pagination"),
            paginationTotal = document.querySelector(
                ".cards-pagination__total"
            ),
            paginationDots = document.querySelector(".cards-pagination__dots"),
            hamburger = document.querySelector(".hamburger"),
            headerNav = document.querySelector(".header nav");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open");
            headerNav.classList.toggle("mobile-nav");
        });

        //this is a function #1
        const onClickFunction = (e) => {
            const event = e.target;

            btn1.forEach((button) => {
                if (button !== event && button.classList.contains("btnJs")) {
                    button.classList.remove("active");
                }
            });

            event.classList.add("active");
        };

        //this is a function #2
        const onClickFunction1 = (e) => {
            const event = e.target;

            btn2.forEach((button) => {
                if (
                    button !== event &&
                    button.classList.contains("button-with-icon")
                ) {
                    button.classList.remove("active");
                }
            });
            cards.forEach((cardsItem) => {
                if (
                    cardsItem.classList.contains("cards-active") &&
                    cardsItem.classList.contains("cards-grid")
                ) {
                    cardsItem.removeAttribute("style", "display");
                    cardsItem.setAttribute("style", "display: flex");
                } else if (
                    cardsItem.classList.contains("cards-active") &&
                    cardsItem.classList.contains("cards-flex")
                ) {
                    cardsItem.removeAttribute("style", "display");
                    cardsItem.setAttribute("style", "display: grid");
                }
            });

            event.classList.add("active");
        };

        //this is eventListener
        btn1.forEach((button) => {
            button.addEventListener("click", onClickFunction);
        });

        //this is eventListener
        btn2.forEach((button) => {
            button.addEventListener("click", onClickFunction1);
        });

        //function that change the view of destinations cards to list
        buttonFlex.addEventListener("click", () => {
            cards.forEach((cardsItem) => {
                cardsItem.classList.remove("cards-grid");
                cardsItem.classList.add("cards-flex");
            });
            cards[slideIndex - 1].style.display = "flex";
        });

        //function that change the view of destinations cards to grid
        buttonGrid.addEventListener("click", () => {
            cards.forEach((cardsItem) => {
                cardsItem.classList.remove("cards-flex");
                cardsItem.classList.add("cards-grid");
            });
            cards[slideIndex - 1].style.display = "grid";
        });

        //adding the numbers of pages that equal to the number of cards
        for (let i = 0; i < cards.length; i++) {
            const li = pagination.appendChild(document.createElement("li"));
            const btn = li.appendChild(document.createElement("button"));
            if (i < 9) {
                btn.innerHTML = "0" + (i + 1);
            } else {
                btn.innerHTML = i + 1;
            }
            paginationTotal.innerHTML = `${
                cards.length < 10 ? "0" + cards.length : cards.length
            }`;
            li.classList.add("cards-pagination__item");
            btn.classList.add("cards-pagination__link");
        }

        //these variables can exist only after previous cycle 'for' has finished
        const listItem = document.querySelectorAll(".cards-pagination__item");

        //Slider

        let slideIndex = 1;

        showSlides(slideIndex);

        function showSlides(n) {
            if (n > cards.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = cards.length;
            }

            cards.forEach((item) => (item.style.display = "none"));

            const displayProperty = cards[slideIndex - 1].classList.contains(
                "cards-grid"
            )
                ? "grid"
                : "flex";
            cards[slideIndex - 1].style.display = displayProperty;

            listItem.forEach((item) => {
                item.classList.remove("pagination__item-current");
            });

            listItem[slideIndex - 1].classList.add("pagination__item-current");
        }

        function plusSlides(n) {
            showSlides((slideIndex += n));
            if (slideIndex === cards.length) {
                paginationTotal.setAttribute("style", "opacity: 1");
                nextSlide.children[0].children[0].setAttribute(
                    "style",
                    "opacity: 0.1"
                );
            } else {
                paginationTotal.setAttribute("style", "opacity: .1");
                nextSlide.children[0].children[0].setAttribute(
                    "style",
                    "opacity: 1"
                );
            }

            if (slideIndex === 1) {
                prevSlide.children[0].children[0].setAttribute(
                    "style",
                    "opacity: 0.1"
                );
            } else {
                prevSlide.children[0].children[0].setAttribute(
                    "style",
                    "opacity: 1"
                );
            }
        }

        nextSlide.addEventListener("click", function () {
            if (slideIndex !== cards.length) {
                plusSlides(1);
            }

            if (slideIndex < cards.length - 1 && slideIndex !== 1) {
                listItem[slideIndex - 2].style.display = "none";
                listItem[slideIndex + 1].style.display = "block";
            } else if (listItem[slideIndex - 2]) {
                listItem[slideIndex - 2].style.display = "block";
            }

            if (slideIndex === cards.length - 2) {
                listItem[slideIndex + 1].style.display = "none";
                listItem[slideIndex - 2].style.display = "block";
                listItem[slideIndex - 3].style.display = "block";

                paginationDots.setAttribute("style", "display: none");
            }
            if (slideIndex === 1) {
                paginationDots.setAttribute("style", "display: block");
                listItem.forEach((item) => (item.style.display = "none"));

                for (let i = -1; i < 2; i++) {
                    listItem[slideIndex - i].style.display = "block";
                }
            }
        });

        prevSlide.addEventListener("click", function () {
            if (slideIndex !== 1) {
                plusSlides(-1);
            }
            if (slideIndex === cards.length - 4) {
                paginationDots.setAttribute("style", "display: block");
            }
            if (slideIndex === cards.length) {
                paginationDots.setAttribute("style", "display: none");
                listItem.forEach((item) => (item.style.display = "none"));
                for (let i = 1; i < 6; i++) {
                    listItem[slideIndex - i].style.display = "block";
                }
            }
            if (slideIndex < cards.length) {
                if (listItem[slideIndex + 2]) {
                    listItem[slideIndex + 2].style.display = "none";
                }
                listItem[slideIndex - 1].style.display = "block";
            } else {
                listItem[slideIndex - 1].style.display = "none";
            }
        });

        // Filtering destination

        let itemsWithFilter = [];
        function addingAttributeToItem(item, event) {
            item.setAttribute("style", "display: flex");

            if (
                event.dataset.destination !== "all" &&
                item.parentNode.classList.contains("cards-grid")
            ) {
                item.setAttribute("style", "grid-row: auto; grid-column: auto");
                item.children[1].setAttribute(
                    "style",
                    "padding: 70px 15px 15px"
                );
            } else {
                item.removeAttribute("style", "grid-row; grid-column");
                item.children[1].removeAttribute(
                    "style",
                    "padding: 70px 15px 15px"
                );
            }

            itemsWithFilter.push(item);
            itemsWithFilter.length < 11
                ? paginationWrapper.setAttribute("style", "display: none")
                : paginationWrapper.setAttribute("style", "display: flex");
        }

        function removeAttributeFromItem(item) {
            item.setAttribute("style", "display: none");
        }

        btn1.forEach((button) => {
            button.addEventListener("click", (e) => {
                itemsWithFilter = [];

                if (e.target.dataset.destination === "all") {
                    card.forEach((item) =>
                        addingAttributeToItem(item, e.target)
                    );
                }

                if (e.target.dataset.destination === "best") {
                    card.forEach((item) => {
                        if (item.dataset.destination === "best") {
                            addingAttributeToItem(item, e.target);
                        } else {
                            removeAttributeFromItem(item);
                        }
                    });
                }

                if (e.target.dataset.destination === "nature") {
                    card.forEach((item) => {
                        if (item.dataset.destination === "nature") {
                            addingAttributeToItem(item, e.target);
                        } else {
                            removeAttributeFromItem(item);
                        }
                    });
                }

                if (e.target.dataset.destination === "city") {
                    card.forEach((item) => {
                        if (item.dataset.destination === "city") {
                            addingAttributeToItem(item, e.target);
                        } else {
                            removeAttributeFromItem(item);
                        }
                    });
                }

                if (e.target.dataset.destination === "seasonal") {
                    card.forEach((item) => {
                        if (item.dataset.destination === "seasonal") {
                            addingAttributeToItem(item, e.target);
                        } else {
                            removeAttributeFromItem(item);
                        }
                    });
                }
            });
        });
    });

    return (
        <section className="destinations">
            <PageTopTemplate nameOfPage="Destinations" />
            <section id="destination1" className="destination1">
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
                        <button
                            data-destination="all"
                            className="button btnJs active"
                        >
                            All
                        </button>
                        <button
                            data-destination="best"
                            className="button btnJs"
                        >
                            Best Seller
                        </button>
                        <button
                            data-destination="nature"
                            className="button btnJs"
                        >
                            Nature
                        </button>
                        <button
                            data-destination="city"
                            className="button btnJs"
                        >
                            City
                        </button>
                        <button
                            data-destination="seasonal"
                            className="button btnJs"
                        >
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
                                        <rect
                                            width="20"
                                            height="20"
                                            fill="black"
                                        />
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
                                        <rect
                                            width="20"
                                            height="20"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            List View
                        </button>
                    </div>
                </div>

                <div className="cards-wrapper">
                    {cardChunks.map((chunk, index) => (
                        <div
                            key={index}
                            className={
                                index === 0
                                    ? "cards cards-grid cards-active"
                                    : "cards cards-grid"
                            }
                        >
                            {chunk.map((destination, i) => (
                                <div
                                    key={i}
                                    data-destination={destination.destination}
                                    className="card"
                                >
                                    <img
                                        className="card-image"
                                        src={destination.img}
                                        alt={destination.name}
                                    />
                                    <div className="card-content">
                                        <h4 className="card-content__title">
                                            {destination.name}
                                        </h4>
                                        <div className="card-content__pricing">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.99999 0C6.32405 0 3.33331 2.99074 3.33331 6.66668C3.33331 7.7702 3.60921 8.86434 4.1337 9.8348L9.63542 19.7852C9.70866 19.9178 9.84823 20 9.99999 20C10.1518 20 10.2913 19.9178 10.3646 19.7852L15.8683 9.83152C16.3908 8.86434 16.6667 7.77016 16.6667 6.66664C16.6667 2.99074 13.6759 0 9.99999 0ZM9.99999 10C8.16202 10 6.66667 8.50465 6.66667 6.66668C6.66667 4.82871 8.16202 3.33336 9.99999 3.33336C11.838 3.33336 13.3333 4.82871 13.3333 6.66668C13.3333 8.50465 11.838 10 9.99999 10Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                                <p>
                                                    {destination.packages}{" "}
                                                    Packages
                                                </p>
                                            </div>
                                            <span> | </span>
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_1_94)">
                                                        <path
                                                            d="M10 0C4.4767 0 0 4.47713 0 10C0 15.5229 4.4767 20 10 20C15.5233 20 20 15.5224 20 10C20 4.47757 15.5229 0 10 0ZM10.6053 14.4545V15.6121C10.6053 15.7927 10.4648 15.9241 10.2837 15.9241H9.51216C9.33113 15.9241 9.18534 15.7927 9.18534 15.6121V14.5563C8.47513 14.5241 7.75882 14.3727 7.21659 14.1664C6.92284 14.055 6.75922 13.7404 6.83711 13.4357L6.96288 12.9457C7.00683 12.7738 7.12172 12.6302 7.27882 12.5497C7.43592 12.4679 7.62044 12.4596 7.78537 12.5227C8.30193 12.7225 8.91205 12.8678 9.56351 12.8678C10.393 12.8678 10.9609 12.5475 10.9609 11.9653C10.9609 11.4122 10.4952 11.0627 9.41773 10.6985C7.86022 10.1745 6.79359 9.44689 6.79359 8.03473C6.79359 6.75399 7.70007 5.7496 9.24975 5.44367V4.38792C9.24975 4.20732 9.40424 4.04543 9.58527 4.04543H10.3568C10.5379 4.04543 10.6706 4.20732 10.6706 4.38792V5.3414C11.3482 5.37056 11.8373 5.47108 12.2464 5.60425C12.5558 5.70521 12.7386 6.02942 12.6572 6.34536L12.5467 6.78402C12.5036 6.95113 12.3931 7.093 12.2416 7.17481C12.0902 7.25663 11.9113 7.27142 11.7477 7.21528C11.376 7.08778 10.8912 6.97202 10.2768 6.97202C9.33069 6.97202 9.02476 7.37978 9.02476 7.78755C9.02476 8.26798 9.53436 8.57348 10.7716 9.03956C12.5036 9.65099 13.1994 10.4517 13.1994 11.7612C13.199 13.0567 12.2838 14.1638 10.6053 14.4545Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_94">
                                                            <rect
                                                                width="20"
                                                                height="20"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <p>{destination.priceRange}</p>
                                            </div>
                                        </div>
                                        <p className="card-content__description">
                                            {destination.description}
                                        </p>
                                        <a
                                            className="card-content__link"
                                            href="/"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    <div className="cards-pagination-wrapper">
                        <button className="cards-pagination__button cards-pagination__button-prev">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                            >
                                <g opacity="0.1">
                                    <path
                                        d="M11.25 18.0001C11.25 17.7124 11.36 17.4244 11.5796 17.2047L22.8296 5.9547C23.2692 5.5151 23.9811 5.5151 24.4204 5.9547C24.8597 6.39429 24.86 7.10613 24.4204 7.54544L13.9657 18.0001L24.4204 28.4547C24.86 28.8943 24.86 29.6061 24.4204 30.0454C23.9808 30.4848 23.2689 30.485 22.8296 30.0454L11.5796 18.7954C11.36 18.5758 11.25 18.2878 11.25 18.0001Z"
                                        fill="#4997D3"
                                    />
                                </g>
                            </svg>
                        </button>
                        <ul className="cards-pagination"></ul>
                        <span className="cards-pagination__dots">...</span>
                        <button className="cards-pagination__total"></button>
                        <button className="cards-pagination__button cards-pagination__button-next">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                            >
                                <g opacity="1">
                                    <path
                                        d="M24.7499 17.9999C24.7499 18.2876 24.64 18.5756 24.4203 18.7953L13.1703 30.0453C12.7307 30.4849 12.0189 30.4849 11.5796 30.0453C11.1403 29.6057 11.14 28.8939 11.5796 28.4546L22.0342 17.9999L11.5796 7.5453C11.14 7.10571 11.14 6.39386 11.5796 5.95455C12.0192 5.51524 12.731 5.51496 13.1703 5.95455L24.4203 17.2046C24.64 17.4242 24.7499 17.7122 24.7499 17.9999Z"
                                        fill="#4997D3"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            <PageUp />
        </section>
    );
};

export default Destinations;
