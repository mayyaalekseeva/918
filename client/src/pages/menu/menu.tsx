import * as React from "react";
import Svg from "@app/components/svg";
import Logo from "@assets/svg/logo.svg";
import FoodMenu from "./pdf/Menu1.pdf";
import CoffeeMenu from "./pdf/Menu2.pdf";
import WineMenu from "./pdf/Menu3.pdf";
import Carousel from "@app/components/carousel";
import PdfViewer from "@app/components/pdfViewer";
import "./menu.scss";

const pdf = [FoodMenu, CoffeeMenu, WineMenu];

const Menu: React.FC = () => {
  const [slideIndex, setSlideIndex] = React.useState<number>(0);

  const menus = pdf.map((item, i) => <PdfViewer file={item} key={i} />);

  const previousMenu = () => {
    if (slideIndex === 0) {
      return;
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const nextMenu = () => {
    if (slideIndex === pdf.length - 1) {
      return;
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <section className="menu">
      <Svg content={Logo} className="menu-svg" />
      <div className="menu-bcg" />

      <button className="menu-btns" onClick={previousMenu}>
        {"<"}
      </button>
      <Carousel currentSlide={slideIndex}>{menus}</Carousel>
      <button className="menu-btns" onClick={nextMenu}>
        {">"}
      </button>
    </section>
  );
};

export default Menu;
