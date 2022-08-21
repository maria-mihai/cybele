import React from "react";
import { createContext, useState } from "react";

export const DropDownContext = createContext({
    selected: false,
    setSelected: () => null
});

export const DropDownProvider = ({children}) => {
    const [selected, setSelected] = useState(false);
    const value = {selected, setSelected};
    return <DropDownContext.Provider value={value}>
        {children}
    </DropDownContext.Provider>
}