import * as React from "react";
import Svg from "@app/components/svg";
import Logo from "@assets/svg/logo.svg";
import "./menu.scss";

const Menu: React.FC = () => {
  return (
    <>
      <Svg content={Logo} className="menu-svg" />
      <section className="menu">
        <div className="menu-slider-wrp"></div>
      </section>
    </>
  );
};

export default Menu;
