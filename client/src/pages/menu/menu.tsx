import * as React from "react";
import Svg from "@app/components/svg";
import Logo from "@assets/svg/logo.svg";
import Pdf from "./pdf/menu.pdf";
import PdfViewer from "@app/components/pdfViewer";
import "./menu.scss";

const Menu: React.FC = () => {
  const [slideIndex, setSlideIndex] = React.useState<number>(1);

  const previousMenu = () => {
    if (slideIndex === 1) {
      return;
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const nextMenu = () => {
    console.log(Pdf.numPages);
    if (slideIndex === Pdf.numPages - 1) {
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
      <PdfViewer file={Pdf} pageNumber={slideIndex} />
      <button className="menu-btns" onClick={nextMenu}>
        {">"}
      </button>
    </section>
  );
};

export default Menu;
