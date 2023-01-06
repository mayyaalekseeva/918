import * as React from "react";
import { IntlContext, Language } from "@app/provider";
import LanguageSvg from "@assets/svg/language.svg";
import Svg from "@app/components/svg";
import { useOuterClick } from "@app/hooks";

import "./languageSelector.scss";

const LanguageSelector: React.FC = () => {
  const { changeLanguage } = React.useContext(IntlContext);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useOuterClick(false);

  const switchLanguage = (code: Language) => {
    changeLanguage(code);
    localStorage.setItem("locale", code);
    setIsComponentVisible(false);
  };

  const toggleSelector = () => {
    setIsComponentVisible(!isComponentVisible);
    console.log({ isComponentVisible });
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
    <div className="language-selector" ref={ref}>
      {isComponentVisible ? selector : languageSvg}
    </div>
  );
};

export default LanguageSelector;
