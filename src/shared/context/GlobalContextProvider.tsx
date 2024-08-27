import React, { createContext, ReactNode, useContext, useState } from 'react';

interface GlobalContextType {
  isLoadingBody: boolean;
  setIsLoadingBody: (isLoadingBody: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoadingBody, setIsLoadingBody] = useState(false);

  return (
    <GlobalContext.Provider value={{ isLoadingBody, setIsLoadingBody }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
