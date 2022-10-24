import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const [myList, setMyList]=useState(['item1'])

    const values={
        myList,
        setMyList
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider