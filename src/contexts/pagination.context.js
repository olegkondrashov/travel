import React, { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = (totalPages) => {
        setCurrentPage((prevPage) => (prevPage < totalPages - 1 ? prevPage + 1 : prevPage));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <PaginationContext.Provider value={{ currentPage, handleNextPage, handlePrevPage, goToPage }}>
            {children}
        </PaginationContext.Provider>
    );
};

export const usePaginationContext = () => {
    return useContext(PaginationContext);
};
