import { useState, createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [pseudoContext, setPseudoContext] = useState('')

    return (
        <AppContext.Provider value={{ pseudoContext, setPseudoContext }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;