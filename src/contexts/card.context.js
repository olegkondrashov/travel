import React, { createContext, useContext, useState, useCallback } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cardChunks, setCardChunks] = useState({});

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const setDestinations = useCallback((key, destinations, chunkSize) => {
        const newChunks = chunkArray(destinations, chunkSize);
        setCardChunks((prevChunks) => {
            // Check if the new chunks are different from the current chunks
            if (JSON.stringify(prevChunks[key]) !== JSON.stringify(newChunks)) {
                return {
                    ...prevChunks,
                    [key]: newChunks,
                };
            }
            return prevChunks;  // Return the previous state if nothing has changed
        });
    }, []);

    return (
        <CardContext.Provider value={{ cardChunks, setDestinations }}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => {
    return useContext(CardContext);
};
