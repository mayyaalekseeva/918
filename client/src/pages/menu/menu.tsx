import * as React from "react";
import Svg from "@app/components/svg";
import Logo from "@assets/svg/logo.svg";
import Pdf from "./pdf/menu.pdf";
import PdfViewer from "@app/components/pdfViewer";
import "./menu.scss";

const Menu: React.FC = () => {
  const [slideIndex, setSlideIndex] = React.useState<number>(1);
  const [containerHeight, setContainerHeight] = React.useState<number>(0);
  const MenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const containerHeight = MenuRef.current?.clientHeight;

    if (!containerHeight) {
      return;
    }
    setContainerHeight(containerHeight);
  }, []);

  const previousMenu = () => {
    if (slideIndex === 1) {
      return;
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const nextMenu = () => {
    setSlideIndex(slideIndex + 1);
  };

  return (
    <section className="menu" ref={MenuRef}>
      <Svg content={Logo} className="menu-svg" />
      <div className="menu-bcg" />

      <button className="menu-btns" onClick={previousMenu}>
        {"<"}
      </button>
      <PdfViewer file={Pdf} pageNumber={slideIndex} height={containerHeight} />
      <button className="menu-btns" onClick={nextMenu}>
        {">"}
      </button>
    </section>
  );
};

export default Menu;
