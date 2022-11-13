import * as React from "react";
import Nav from "@app/components/navigation";
import LanguageSelector from "@app/components/languageSelector";
import "./header.scss";
import BurgerMenu from "../burgerMenu";

const Header: React.FC = () => {
  const [isMenuActive, setMenuActive] = React.useState(false);

  const handleBurger = () => {
    setMenuActive(!isMenuActive);
    const body = document.body.classList;
    body.toggle("overflow");
  };

  return (
    <header className="header">
      <div onClick={handleBurger}>
        <BurgerMenu />
      </div>
      <Nav isMenuActive={isMenuActive} handleMenu={handleBurger} />
      <LanguageSelector />
    </header>
  );
};

export default Header;
