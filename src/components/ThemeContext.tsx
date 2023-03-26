import React from "react";

interface ITheme {
  theme?: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ITheme>({});

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState("theme1");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
