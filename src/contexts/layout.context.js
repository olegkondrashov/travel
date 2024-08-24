import React, { createContext, useState, useContext } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [layoutMode, setLayoutMode] = useState('cards-grid');
    const [searchQuery, setSearchQuery] = useState("");
    const [filterDestination, setFilterDestination] = useState("all");

    const handleLayoutChange = (layout) => {
        setLayoutMode(layout === 'cards-grid' ? 'cards-grid' : 'cards-flex');
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const handleDestinationFilterChange = (destination) => {
        setFilterDestination(destination);
    };

    return (
        <LayoutContext.Provider
            value={{
                layoutMode,
                handleLayoutChange,
                searchQuery,
                handleSearchChange,
                filterDestination,
                handleDestinationFilterChange,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayoutContext = () => useContext(LayoutContext);
