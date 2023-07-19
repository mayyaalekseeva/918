import * as React from "react";
import { IntlProvider } from "react-intl";
import ru from "@languages/ru.json";
import en from "@languages/en.json";

export enum Language {
  EN = "en",
  RU = "ru",
}

export type LanguageKeys = keyof typeof Language;

type ChangeLanguage = (code: Language) => void;

interface IntlController {
  changeLanguage: ChangeLanguage;
  currentLanguage: Language;
}

export const Context = React.createContext<IntlController>({
  changeLanguage: () => undefined,
  currentLanguage: Language.RU,
});

const IntlWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [intlProps, setIntlProps] = React.useState({
    messages: localStorage.locale == "ru" ? ru : en,
    locale: Language.RU,
  });

  const loadLocaleData = (locale: Language) => {
    switch (locale) {
      case "en":
        return en;
      default:
        return ru;
    }
  };

  const changeIntlProps = (code: Language) => {
    const messages = loadLocaleData(code);

    setIntlProps({
      messages,
      locale: code,
    });
  };

  const changeLanguage: ChangeLanguage = (code) => {
    changeIntlProps(code);
  };

  return (
    <Context.Provider
      value={{
        changeLanguage,
        currentLanguage: localStorage["locale"]
          ? localStorage["locale"]
          : Language.RU,
      }}
    >
      <IntlProvider {...intlProps} defaultLocale={Language.RU}>
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default IntlWrapper;
