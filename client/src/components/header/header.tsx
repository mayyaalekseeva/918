import * as React from "react";
import Nav from "@app/components/navigation";
import LanguageSelector from "@app/components/languageSelector";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Nav />
      <LanguageSelector />
    </header>
  );
};

export default Header;
