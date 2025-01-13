import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ArticleContextProps {
  title: string;
  description: string;
  mainContent: string;
  imageSource: string;
  date: string;
  url: string;
  fontSizeBig: boolean;
  setFontSizeBig: React.Dispatch<React.SetStateAction<boolean>>;
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
  isSticky: boolean;
  setIsSticky: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArticleContext = createContext<ArticleContextProps | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: ReactNode, value: ArticleContextProps }> = ({ children, value }) => {
  
  return (
    <ArticleContext.Provider value={value}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    return {} as ArticleContextProps;
   // throw new Error('useArticle must be used within an ArticleProvider');
  }
  return context;
};