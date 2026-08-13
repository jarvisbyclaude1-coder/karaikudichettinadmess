/**
 * The Tamarind House: bilingual support is direct, calm, and editorial.
 * Each interface string should retain equal hierarchy in English and Tamil.
 */
import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "en" | "ta";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: (english: string, tamil: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const toggleLanguage = () => setLanguage((current) => (current === "en" ? "ta" : "en"));
  const t = (english: string, tamil: string) => (language === "en" ? english : tamil);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
