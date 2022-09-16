import * as React from "react";
import { IntlContext, Language, LanguageKeys } from "@app/provider";
import LanguageSvg from "@assets/svg/language.svg";
import "./languageSelector.scss";

const LanguageSelector: React.FC = () => {
  const { changeLanguage } = React.useContext(IntlContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const switchLanguage = (code: Language) => {
    console.log({ code });
    changeLanguage(code);
  };

  const toggleSelector = () => {
    setIsOpen(!isOpen);
  };

  const selector: React.ReactElement = (
    <ul className="language-selector-list">
      {Object.keys(Language).map((code: LanguageKeys) => (
        <li onClick={() => switchLanguage(Language[code])} key={code}>
          {code}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="language-selector">
      {isOpen && (
        <img src={LanguageSvg} alt="language-svg" onClick={toggleSelector} />
      )}
      {!isOpen && selector}
    </div>
  );
};

export default LanguageSelector;
