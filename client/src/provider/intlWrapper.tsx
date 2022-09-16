import * as React from "react";
import { IntlProvider } from "react-intl";

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
    messages: {},
    locale: Language.RU,
  });

  const loadLocaleData = (locale: Language) => {
    switch (locale) {
      case "en":
        return import("@languages/en.json");
      default:
        return import("@languages/ru.json");
    }
  };

  const changeIntlProps = (code: Language) => {
    loadLocaleData(code).then((data) => {
      setIntlProps({
        messages: data,
        locale: code,
      });
    });
  };

  const changeLanguage: ChangeLanguage = (code) => {
    changeIntlProps(code);
  };

  return (
    <Context.Provider
      value={{
        changeLanguage,
        currentLanguage: intlProps.locale,
      }}
    >
      <IntlProvider {...intlProps} defaultLocale={Language.RU}>
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default IntlWrapper;
