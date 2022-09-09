import * as React from "react";
import Nav from "@app/components/navigation";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Nav />
    </header>
  );
};

export default Header;
