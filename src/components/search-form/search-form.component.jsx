import { useState } from "react";

import './search-form.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const SearchForm = () => {

    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [priceRange, setPriceRange] = useState("");
  
    const handleSearch = () => {
      console.log("Search:", destination, date, priceRange);
    };

    return (
        <div className="search-form">
            <form id="form">
                <div className="search-form__item">
                    <label htmlFor="destination">
                        Destinations
                    </label>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 16.5C11.8082 16.5 11.6162 16.4267 11.4698 16.2802L3.96975 8.78024C3.67669 8.48717 3.67669 8.01261 3.96975 7.71974C4.26281 7.42686 4.73738 7.42667 5.03025 7.71974L12 14.6895L18.9698 7.71974C19.2628 7.42667 19.7374 7.42667 20.0303 7.71974C20.3231 8.0128 20.3233 8.48736 20.0303 8.78024L12.5303 16.2802C12.3838 16.4267 12.1918 16.5 12 16.5Z"
                            fill="#4997D3"
                        />
                    </svg>
                    <select
                        id="destination"
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    >
                        <option value="Yogyakarta, Indonesia">Yogyakarta, Indonesia</option>
                        <option value="Greece">Greece</option>
                        <option value="Italy">Italy</option>
                    </select>
                </div>

                <div className="search-form__item">
                    <label htmlFor="date">
                        Date
                    </label>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 16.5C11.8082 16.5 11.6162 16.4267 11.4698 16.2802L3.96975 8.78024C3.67669 8.48717 3.67669 8.01261 3.96975 7.71974C4.26281 7.42686 4.73738 7.42667 5.03025 7.71974L12 14.6895L18.9698 7.71974C19.2628 7.42667 19.7374 7.42667 20.0303 7.71974C20.3231 8.0128 20.3233 8.48736 20.0303 8.78024L12.5303 16.2802C12.3838 16.4267 12.1918 16.5 12 16.5Z"
                            fill="#4997D3"
                        />
                    </svg>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        placeholder="mm-dd-yyyy"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="search-form__item">
                    <label htmlFor="price">
                        Price
                    </label>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 16.5C11.8082 16.5 11.6162 16.4267 11.4698 16.2802L3.96975 8.78024C3.67669 8.48717 3.67669 8.01261 3.96975 7.71974C4.26281 7.42686 4.73738 7.42667 5.03025 7.71974L12 14.6895L18.9698 7.71974C19.2628 7.42667 19.7374 7.42667 20.0303 7.71974C20.3231 8.0128 20.3233 8.48736 20.0303 8.78024L12.5303 16.2802C12.3838 16.4267 12.1918 16.5 12 16.5Z"
                            fill="#4997D3"
                            />
                    </svg>
                    <select
                        name="price"
                        id="price"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                    >
                        <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                        <option value="$2,000 - $3,000">$2,000 - $3,000</option>
                        <option value="$3,000 - $4,000">$3,000 - $4,000</option>
                    </select>
                </div>
                <Button 
                    buttonType={BUTTON_TYPE_CLASSES.blue}
                    className="button-search"
                    onClick={handleSearch}
                    >
                    Search
                </Button>
            </form>
        </div>
    )
}

export default SearchForm;