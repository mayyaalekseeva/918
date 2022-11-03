import Chess from "@app/components/chess";
import Svg from "@app/components/svg";
import Logo from "@assets/svg/logo.svg";
import * as React from "react";
import "./main.scss";

const Main: React.FC = () => {
  return (
    <main className="main">
      <section className="main-interior">
        <Svg content={Logo} className="main-svg" />
      </section>
      <Chess />
    </main>
  );
};

export default Main;
