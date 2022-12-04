import * as React from "react";
import Pdf from "./pdf/menu.pdf";
import PdfViewer from "@app/components/pdfViewer";
import "./menu.scss";

const Menu: React.FC = () => {
  const [pageNumber, setPageNumber] = React.useState<number>(1);
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
    if (pageNumber === 1) {
      return;
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const nextMenu = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <section className="menu" ref={MenuRef}>
      <div className="menu-bcg" />

      <div className="menu-btns left" onClick={previousMenu}></div>
      <PdfViewer file={Pdf} pageNumber={pageNumber} height={containerHeight} />
      <div className="menu-btns right" onClick={nextMenu}></div>
    </section>
  );
};

export default Menu;
