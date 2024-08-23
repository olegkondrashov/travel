import React, { useMemo } from "react";
import { usePaginationContext } from "../../contexts/pagination.context";
import { destinations } from "../../destinations";
import "./destination-cards.styles.scss";

// Utility function to split an array into smaller chunks of a specified size
const chunkArray = (array, chunkSize) => {
    const chunks = [];
    // Loop through the array, slicing it into chunks
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
};

const DestinationCards = () => {
    // Extract pagination-related state and functions from context
    const { currentPage, handleNextPage, handlePrevPage, goToPage } =
        usePaginationContext();

    // Memoize the chunked array to avoid recalculating it on every render
    const cardChunks = useMemo(() => chunkArray(destinations, 11), []);
    const totalPages = cardChunks.length; // Calculate the total number of pages

    const visibleRange = 2; // Number of pages to show before and after the current page

    // Determine which page numbers should be visible in the pagination
    const visiblePages = useMemo(() => {
        // Calculate the range of pages to display based on the current page
        const startPage = Math.max(0, currentPage - visibleRange);
        const endPage = Math.min(totalPages - 1, currentPage + visibleRange);

        // Special case: ensure that the last few pages are always visible when near the end
        if (currentPage >= totalPages - visibleRange - 1) {
            return [...Array(totalPages).keys()].slice(totalPages - 4);
        }

        // Return the range of pages to be displayed
        return [...Array(totalPages).keys()].slice(startPage, endPage + 1);
    }, [currentPage, totalPages]);

    // Determine if we should show the "..." after the visible page numbers
    const shouldShowDotsAfter = currentPage < totalPages - visibleRange - 1;

    return (
        <div className="cards-wrapper">
            {/* Render the cards for the current page */}
            <div className="cards cards-grid">
                {cardChunks[currentPage]?.map((destination, index) => (
                    <div key={index} className="card">
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
                                    <p>{destination.packages} Packages</p>
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
                            <a className="card-content__link" href="/">
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="cards-pagination-wrapper">
                {/* Button to go to the previous page */}
                <button
                    className="cards-pagination__button cards-pagination__button-prev"
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                    >
                        <g opacity={`${currentPage === 0 ? ".1" : "1"}`}>
                            <path
                                d="M11.25 18.0001C11.25 17.7124 11.36 17.4244 11.5796 17.2047L22.8296 5.9547C23.2692 5.5151 23.9811 5.5151 24.4204 5.9547C24.8597 6.39429 24.86 7.10613 24.4204 7.54544L13.9657 18.0001L24.4204 28.4547C24.86 28.8943 24.86 29.6061 24.4204 30.0454C23.9808 30.4848 23.2689 30.485 22.8296 30.0454L11.5796 18.7954C11.36 18.5758 11.25 18.2878 11.25 18.0001Z"
                                fill="#4997D3"
                            />
                        </g>
                    </svg>
                </button>

                <div className="cards-pagination-container">
                    {/* List of pagination items */}
                    <ul className="cards-pagination">
                        {visiblePages.map((page) => {
                            if (page === totalPages - 1) {
                                // Hide the last page number if it's the totalPages item
                                return (
                                    <li
                                        key={page}
                                        className="cards-pagination__item"
                                        style={{
                                            display: "none",
                                        }}
                                    />
                                );
                            } else {
                                // Render the page number buttons
                                return (
                                    <li
                                        key={page}
                                        className={`cards-pagination__item ${
                                            page === currentPage
                                                ? "pagination__item-current"
                                                : ""
                                        }`}
                                    >
                                        <button
                                            className="cards-pagination__link"
                                            onClick={() => goToPage(page)}
                                        >
                                            {page + 1}
                                        </button>
                                    </li>
                                );
                            }
                        })}
                        {shouldShowDotsAfter && (
                            <span className="cards-pagination__dots">...</span>
                        )}
                    </ul>

                    {/* Display the total number of pages */}
                    <button
                        className={`cards-pagination__total ${
                            currentPage === totalPages - 1
                                ? "pagination__item-current"
                                : ""
                        }`}
                        disabled
                    >
                        {totalPages}
                    </button>
                </div>

                {/* Button to go to the next page */}
                <button
                    className="cards-pagination__button cards-pagination__button-next"
                    onClick={() => handleNextPage(totalPages)}
                    disabled={currentPage === totalPages - 1}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                    >
                        <g
                            opacity={`${
                                currentPage === totalPages - 1 ? ".1" : "1"
                            }`}
                        >
                            <path
                                d="M24.7499 17.9999C24.7499 18.2876 24.64 18.5756 24.4203 18.7953L13.1703 30.0453C12.7307 30.4849 12.0189 30.4849 11.5796 30.0453C11.1403 29.6057 11.14 28.8939 11.5796 28.4546L22.0342 17.9999L11.5796 7.5453C11.14 7.10571 11.14 6.39386 11.5796 5.95455C12.0192 5.51524 12.731 5.51496 13.1703 5.95455L24.4203 17.2046C24.64 17.4242 24.7499 17.7122 24.7499 17.9999Z"
                                fill="#4997D3"
                            />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default DestinationCards;
