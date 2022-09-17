import Svg from "@app/components/svg";
import Logo from "@assets/svg/logo.svg";
import * as React from "react";
import "./main.scss";

const Main: React.FC = () => {
  const chess: React.ReactElement = (
    <div className="main-chess">
      <section className="main-chess">
        <div className="main-about">
          <h3 className="main-about-title"></h3>
          <span className="main-about-description"></span>
        </div>
        <img src="" alt="" />
      </section>
      <section className="main-chess"></section>
      <section className="main-chess"></section>
      <section className="main-chess"></section>
    </div>
  );

  return (
    <>
      <main className="main">
        <div className="main-interior">
          <Svg content={Logo} className="main-svg" />
        </div>
      </main>
    </>
  );
};

export default Main;
