import { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [placeSearch, setPlaceSearch] = useState([])
    const [filterAlimony, setFilterAlimony] = useState({
        Category: '',
        must_pay: '',
        recipient: '',
        ruling: '',
        ruling_date: '',
        began_paying: '',
    })

    return (
        <Context.Provider value={{
            placeSearch, setPlaceSearch,
            filterAlimony, setFilterAlimony
        }}>
            {children}
        </Context.Provider>
    );
};