import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';  // Sistem temasını almak için

// Tema context'i oluşturuyoruz
export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);  // Hook ile erişim sağlıyoruz

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();  // Sistem temasını alır
  const [theme, setTheme] = useState(systemTheme === 'dark' ? 'dark' : 'light');  // Varsayılan tema

  // Tema değişikliğini sistem teması ile uyumlu hale getirme
  useEffect(() => {
    setTheme(systemTheme === 'dark' ? 'dark' : 'light');
  }, [systemTheme]);

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
