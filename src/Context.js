import React, { useState, useContext, createContext } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [load, setLoad] = useState(20);
    const [step, setStep] = useState(1);

    
  return <AppContext.Provider value={{load, setLoad, step, setStep}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
