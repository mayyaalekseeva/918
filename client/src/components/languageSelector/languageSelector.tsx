import * as React from "react";
import { IntlContext, Language, LanguageKeys } from "@app/provider";
import LanguageSvg from "../../../assets/svg/language.svg";
import "./languageSelector.scss";
import Svg from "@app/components/svg";

const LanguageSelector: React.FC = () => {
  const { changeLanguage } = React.useContext(IntlContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const switchLanguage = (code: Language) => {
    changeLanguage(code);
    localStorage.setItem("locale", code);
    setIsOpen(false);
  };

  const toggleSelector = () => {
    setIsOpen(!isOpen);
    console.log({ isOpen });
  };

  const selector: React.ReactElement = (
    <ul className="language-selector-list">
      <li onClick={() => switchLanguage(Language.RU)} key={Language.RU}>
        Русский
      </li>
      <li onClick={() => switchLanguage(Language.EN)} key={Language.EN}>
        English
      </li>
    </ul>
  );

  const languageSvg: React.ReactElement = (
    <button onClick={toggleSelector}>
      <Svg content={LanguageSvg} className="language-selector-svg" />
    </button>
  );

  return (
    <div className="language-selector">
      {!isOpen && languageSvg}
      {isOpen && selector}
    </div>
  );
};

export default LanguageSelector;
